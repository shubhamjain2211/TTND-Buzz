import React from 'react';
import './Banner.css';
import Aux from '../Aux';
import road from '../../resources/images/road.jpg';

function Banner() {
  return (
    <Aux> 
      <img className="banner" src={road} alt="banner"/>
      <h1>POSTING YOUR THOUGHTS</h1>
      <h1>NEVER BEEN SO EASY...</h1>
    </Aux>
  );
}

export default Banner;
