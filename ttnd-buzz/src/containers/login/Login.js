import React from 'react';
import './Login.css';
import logo from '../../resources/logo/ttn.png';
import google from '../../resources/logo/google.png';

function Login() {
  return (
    <main>
      <div className="background"></div>
        <div className="login-div">
            <img src={logo} alt="ttn logo" />
            <div className="logintext">Create Your Own Buzz
              <span className="logintexttooltip">The purpose of this app is to make the process of circulating events and concerns in a structured way.</span>
            </div>
            <a href="http://localhost:5000">Login With Google</a><br></br>
            <img href="http://localhost:5000" className="google" src={google} alt="sign in logo" />
        </div>
    </main>
  );  
}

export default Login;
