import React from 'react';
import './Banner.css';
import Aux from '../../HOC/Aux';
import road from '../../resources/images/road.jpg';

function Banner() {
  return (
    <Aux> 
      <div><img className="banner" src={road} alt="banner"/></div>
      <h1 className="line1" >POSTING YOUR THOUGHTS</h1>
      <h1 className="line2">NEVER BEEN SO EASY...</h1>
    </Aux>
  );
}

export default Banner;
