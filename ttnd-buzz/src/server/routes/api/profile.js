const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route  Get api/profle/me
//@desc   Get current user profile
//@access Private
router.get('/me', auth, async (req,res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',
        ['name', 'avatar']);

        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
     }
});

//@route  POST api/profle
//@desc   Create or Update user profile
//@access Private
router.post('/', [auth,[
    check('status', 'Status is required').not().isEmpty()]
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
    const {
        company,
        status
    }=req.body;

    //Build Profile Object
    const profleFields = {};
    profleFields.user=req.user.id;
    if(company) profleFields.company = company;
    if(status) profleFields.status = status;

    console.log(company);
    console.log(status);

    try{
        let profile = await Profile.findOne({ user:req.user.id });
        
        if(profile) {
            //Update
            profile = await Profile.findOneAndUpdate( 
                { user: req.user.id }, 
                { $set: profleFields },
                { new:true } 
            );
            
            return res.json(profile);
        }

            //Create
            profile= new Profile(profleFields);

            await profile.save();
            return res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    });
//@route  GET api/profile
//@desc   Get all Profiles
//@access Public
router.get('/', async (req,res) =>{
    try{
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);

        if(!profiles){
            return res.status(400).json({ msg: 'There are no profiles' });
        }

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route  GET api/profile/user/user:id
//@desc   Get profile by user ID
//@access Public
router.get('/user/:user_id', async (req,res) =>{
    try{
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

        if(!profile) {
            return res.status(400).json({ msg: 'Profile Not Found'});
        }

        res.json(profile);

        if(!profiles){
            return res.status(400).json({ msg: 'There are no profiles' });
        }

    }catch(err){
        console.error(err.message);
        if(err.kind == (err.message)){
            return res.status(400).json({ msg: 'Profile Not Found'});
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;