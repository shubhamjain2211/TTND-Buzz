import React from 'react';
import './Login.css';
import logo from '../../resources/logo/ttn.png';
import { Link } from 'react-router-dom';
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
            <Link to="/loginform">Login</Link><br></br>
            <Link to="/registerform">Register</Link>
            {/* <img href="http://localhost:5000" className="google" src={google} alt="sign in logo" /> */}
        </div>
    </main>
  );  
}

export default Login;
