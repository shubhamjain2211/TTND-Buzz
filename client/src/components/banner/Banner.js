import React, {Fragment} from 'react';
import './Banner.css';
import road from '../../resources/images/road.jpg';

function Banner() {
  const url= window.location.href;
  return (
    <Fragment> 
      <div><img className="banner" src={road} alt="banner"/></div>
      { url === "http://localhost:3000/dashboard" ? 
      <h1 className="line1" >POSTING YOUR THOUGHTS</h1> :
      <h1 className="line1" >CREATING BUZZ AROUND YOU</h1>}
      <h1 className="line2">NEVER BEEN SO EASY...</h1>
    </Fragment>
  );
}

export default Banner;
