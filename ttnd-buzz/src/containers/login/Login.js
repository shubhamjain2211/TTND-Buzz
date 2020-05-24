import React from 'react';
import './Login.css';
import logo from '../../resources/logo/ttn.png';
import google from '../../resources/logo/google.png';

function Login() {
  return (
    <main>
      <div className="background"></div>
        <div className="login-div">
            <img className="logo" src={logo} alt="ttn logo" />
            <div class="tooltip">Create Your Own Buzz
              <span class="tooltiptext">The purpose of this app is to make the process of circulating events and concerns in a structured way.</span>
            </div>
            <img className="google" src={google} alt="sign in logo" />
        </div>
    </main>
  );
}

export default Login;
