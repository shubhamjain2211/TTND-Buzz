const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const credentials = require('../config/credentials');
const userCollection = require('../service/user');
const emailVerify = require('../middleware/emailverify');
const userRoleCollection = require('../service/userrolemapping');
const roleCollection = require('../service/role');

const google = new GoogleStrategy(
  credentials,
  async (accessToken, refreshToken, profile, done) => {
   
    /*let user;
    let userObject = {
      name: profile._json.name,
      email: profile._json.email,
      photoUrl: profile._json.picture,
    };
    profile = userObject;*/
    console.log('user profile', profile);
    if(profile){
        done(null,profile);
    }
    else{
        done(null,null);
    }
   /* let userFoundOrNot = await userCollection.read(profile.email);
    console.log('user found', userFoundOrNot);
    if (userFoundOrNot === null) {
      user = await userCollection.create(profile);

      let userRole = await userRoleCollection.create({
        userid: user._id,
      });


      if (user) {
         profile = {...profile, id:user._id};
        done(null, profile);
      } else {
        done(null, null, { message: 'error' });
      }
    } else {
      profile = {...profile, id:userFoundOrNot._id};
      done(null, profile);
    }*/
    
  },
);

passport.use(google);

module.exports = passport;
