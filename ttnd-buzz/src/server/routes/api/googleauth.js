const express = require('express');
const userRoute = express.Router();
const createToken = require('../utils/token');
const passport = require('../../utils/auth');

userRoute.get(
  '/',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
  }),
);

userRoute.get(
  'auth/google/callback',
  passport.authenticate('google', {
    session: false,
  }),
   (req, res) => {
    /*let token = jwt.sign(
        payload, 
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
            if(err) throw err;
            res.json({ token });
        });
    //let token = await createToken(req.user.email,req.user.id);*/
    console.log('profile is', req.user);
    /*console.log('token route', token);
    res.redirect(
      `http://localhost:3000/settoken/?token=${token}`,
    );*/
  },
);

module.exports = userRoute;
