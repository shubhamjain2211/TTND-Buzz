import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <Fragment>
      <div className="Menu"><span>Buzz</span><i className="fas fa-caret-right"></i></div>
      <div className="Menu"><span>Complaints</span><i className="fas fa-caret-right"></i></div>
      <div className="MenuFooter"><i class="far fa-copyright"></i> 2016 To The New Digital <a target="_blank" href="https://www.tothenew.com/about-us">About</a> <a target="_blank" href="https://www.tothenew.com/contact-us">Help</a></div>
    </Fragment>
  );
}

export default Menu;
