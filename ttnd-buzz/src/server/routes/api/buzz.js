const express = require('express');
const router = express.Router();
const { check,validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Buzz = require('../../models/Buzz');
const Complaint = require('../../models/Complaint');

//@route   Post api/buzz
//@desc    Create a Buzz
//@access  Private  
router.post('/', [
    auth,
    [
        check('text', 'Text is required')
        .not()
        .isEmpty(),
        check('category', 'Category is required')
        .not()
        .isEmpty()
    ]
],
    
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newBuzz= new Buzz({
                text: req.body.text,
                category: req.body.category,
                name: user.name,
                avatar: user.avatar,
                user: req.user.id
            });
            
            const buzz = await newBuzz.save();

            res.json(buzz);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
});

//@route   Get api/buzz
//@desc    Get all Buzz
//@access  Private          
router.get('/', auth, async (req, res) =>{
    try {
        const buzz = await Buzz.find().sort({ date: -1 });
        res.json(buzz);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Delete api/buzz:id
//@desc    Delete a buzz
//@access  Private          
router.delete('/:id', auth, async (req, res) =>{
    try {
        const buzz = await Buzz.findById(req.params.id);
        
        if(!buzz) {
            return res.status(404).json({ msg: 'Buzz not found'} );
        }

        //Check User
        if(buzz.user.toString() !== req.user.id){
            return res.status(401).json({ msg: 'User not authorised' });
        }
        
        await buzz.remove();

        res.json({ msg: 'Buzz removed' });

    } catch (err) {
        console.error(err.message);
        if(err.kind==='ObjectId') {
            return res.status(404).json({ msg: 'Buzz not found' })
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;