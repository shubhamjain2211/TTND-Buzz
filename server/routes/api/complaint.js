const express = require('express');
const router = express.Router();
const { check,validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
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
            // console.log(req. body);
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const profile = await Profile.find({
                'status': 'Admin',
                'department' : req.body.department
            }).select('user');

            const user = await User.findById(req.user.id).select('-password');
            const assignedToName = await User.findById(profile[0].user).select('name');
            // console.log(req.body.image);
            const newComplaint= new Complaint({
                user: req.user.id,
                text: req.body.text,
                name: user.name,
                email: user.email,
                department: req.body.department,
                issueTitle: req.body.issueTitle,
                assignedTo: assignedToName.name,
                lockedBy: assignedToName.name,
                assignedToId: profile[0].user,
                status: "Open",
                image: req.body.image
            });
            
            const complaint = await newComplaint.save();

            res.json(complaint);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
});

//@route   Get api/complaint
//@desc    Get all Complaint of a user
//@access  Private          
router.get('/', auth, async (req, res) =>{
    try {
        const complaint = await Complaint.find({
            'user' :req.user.id})
            .sort({ date: -1 });
        res.json(complaint);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Get api/complaint/open
//@desc    Get open Complaints of a user
//@access  Private          
router.get('/open', auth, async (req, res) =>{
    try {
        const complaint = await Complaint.find({
            'user' :req.user.id})
            .where({ status: 'Open' })
            .sort({ date: -1 });
        res.json(complaint);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Get api/complaint/progress
//@desc    Get progress Complaints of a user
//@access  Private          
router.get('/progress', auth, async (req, res) =>{
    try {
        const complaint = await Complaint.find({
            'user' :req.user.id})
            .where({ status: 'In-Progress' })
            .sort({ date: -1 });
        res.json(complaint);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Get api/complaint/resolved
//@desc    Get resolved Complaints of a user
//@access  Private          
router.get('/resolved', auth, async (req, res) =>{
    try {
        const complaint = await Complaint.find({
            'user' :req.user.id})
            .where({ status: 'Resolved' })
            .sort({ date: -1 });
        res.json(complaint);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Get api/complaint/admin
//@desc    Get all Complaint of an Admin
//@access  Private          
router.get('/admin', auth, async (req, res) =>{
    try {
        const complaint = await Complaint.find({
            'assignedToId' :req.user.id})
            .sort({ date: -1 });
        res.json(complaint);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Get api/complaint:id
//@desc    Get a complaint by Id
//@access  Private          
router.get('/:id', auth, async (req, res) =>{
    try {
        const complaint = await Complaint.findById(req.params.id);
        // console.log(req.params.id);
        if(!complaint) {
            return res.status(404).json({ msg: 'Complaint not found'} );
        }

        //Check User
        // console.log(req.user.id);
        // console.log(complaint.user);
        // console.log(complaint.assignedToId);

        if(complaint.user.toString() === req.user.id)
            res.json(complaint);
        else if(complaint.assignedToId.toString() === req.user.id)
            res.json(complaint);
        else 
            return res.status(401).json({ msg: 'User not authorised' });
        }

     catch (err) {
        console.error(err.message);
        if(err.kind==='ObjectId') {
            return res.status(404).json({ msg: 'Complaint not found' })
        }
        res.status(500).send('Server Error');
    }
});

router.put('/update/:id', auth, async (req,res) => {
    try {
        let complaint = await Complaint.findByIdAndUpdate( req.params.id );

        console.log('original',complaint.status); 

        if(complaint.status==='Open'){
            console.log('open to progress');
            complaint.status = 'In-Progress';}
        else if(complaint.status==='In-Progress'){
            console.log('progress to resolved');
            complaint.status = 'Resolved';}
        else if(complaint.status==='Resolved'){
            console.log('resolved to open');
            complaint.status = 'Open';}
        
        await complaint.save();

        console.log('edited',complaint.status); 
        
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