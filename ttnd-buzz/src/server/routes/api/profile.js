const express = require('express');
const router = express.Router();

//@route Get api/profle
//@desc Test Route
//@access Public
router.get('/', (req,res) => res.send('Profile Route'));

module.exports = router;