import React from 'react';
import './Logout.css';
import Aux from '../../HOC/Aux';
import Logo from '../../resources/logo/ttn.png';

function Logout() {
  return (
    <Aux> 
      <div className="logout">
        <img className="logo" src={Logo} alt="TTN Logo"/>
        <div>
          <h4>Logout</h4>
        </div>
      </div>
    </Aux>  
  );
}

export default Logout;
