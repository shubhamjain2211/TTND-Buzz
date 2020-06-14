const express = require('express');
const router = express.Router();
const { check,validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Buzz = require('../../models/Buzz');
const Complaint = require('../../models/Complaint');

//@route   Post api/complaint
//@desc    Create a Complaint
//@access  Private  
router.post('/', [
    auth,
    [
        check('text', 'Text is required')
        .not()
        .isEmpty(),
        check('department', 'Department is required')
        .not()
        .isEmpty(),
        check('issueTitle', 'Issue Title is required')
        .not()
        .isEmpty()
    ]
],
    
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.log(req.body)
            console.log("it came here")
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            console.log(req.body)
            const newComplaint= new Complaint({
                text: req.body.text,
                department: req.body.department,
                issueTitle: req.body.issueTitle,
                name: user.name,
                user: req.user.id
            });
            
            const complaint = await newComplaint.save();

            res.json(complaint);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
});

//@route   Get api/complaint
//@desc    Get all Complaint
//@access  Private          
router.get('/', auth, async (req, res) =>{
    try {
        const complaint = await Complaint.find().sort({ date: -1 });
        res.json(complaint);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Delete api/complaint:id
//@desc    Delete a complaint
//@access  Private          
router.delete('/:id', auth, async (req, res) =>{
    try {
        const complaint = await Complaint.findById(req.params.id);
        
        if(!complaint) {
            return res.status(404).json({ msg: 'Complaint not found'} );
        }

        //Check User
        if(complaint.user.toString() !== req.user.id){
            return res.status(401).json({ msg: 'User not authorised' });
        }
        
        await complaint.remove();

        res.json({ msg: 'Complaint removed' });

    } catch (err) {
        console.error(err.message);
        if(err.kind==='ObjectId') {
            return res.status(404).json({ msg: 'Complaint not found' })
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;