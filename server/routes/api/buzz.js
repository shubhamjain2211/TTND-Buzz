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
    ]
],
    
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');  
            
            // Set Default Value for Category
            let category = req.body.category;
            if(category=='' ||category=='Category')
            category='Activity Buzz';

            const newBuzz= new Buzz({
                text: req.body.text,
                category: category,
                image: req.body.image,
                name: user.name,
                email: user.email,
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

//@route   Get api/buzz/ActivityBuzz
//@desc    Get all Activity Buzz
//@access  Private          
router.get('/activity', auth, async (req, res) =>{
    try {
        const buzz = await Buzz.find().where({ category:'Activity Buzz' }).sort({ date: -1 });
        res.json(buzz);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Get api/buzz/LostandFoundBuzz
//@desc    Get all Lost and Found Buzz
//@access  Private          
router.get('/lostandfound', auth, async (req, res) =>{
    try {
        const buzz = await Buzz.find().where({ category:'Lost and Found Buzz' }).sort({ date: -1 });
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

//@route   Put api/buzz/like:id
//@desc    Like a Buzz
//@access  Private
router.put('/like/:id', auth, async (req,res) => {
    try {
        const buzz = await Buzz.findById(req.params.id);

        //Check if the Buzz has been already liked or disliked
        if(buzz.likes.filter(like => like.user.toString() === req.user.id).length>0 || 
        buzz.dislikes.filter(dislike => dislike.user.toString() === req.user.id).length>0){
            return res.status(400).json({ msg: 'Already Reacted on Buzz' });
        }

        buzz.likes.unshift({ user: req.user.id });

        await buzz.save();
        console.log(buzz);

        res.json(buzz.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route   Put api/buzz/dislike:id
//@desc    Dislike a Buzz
//@access  Private
router.put('/dislike/:id', auth, async (req,res) => {
    try {
        const buzz = await Buzz.findById(req.params.id);

        //Check if the Buzz has been already liked or disliked
        if(buzz.likes.filter(like => like.user.toString() === req.user.id).length>0 || 
        buzz.dislikes.filter(dislike => dislike.user.toString() === req.user.id).length>0){
            return res.status(400).json({ msg: 'Already Reacted on Buzz' });
        }

        buzz.dislikes.unshift({ user: req.user.id });

        await buzz.save();

        res.json(buzz.dislikes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;