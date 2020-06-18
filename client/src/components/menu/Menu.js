import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <Fragment>
      <Link to='/dashboard'><div className="Menu"><span>Buzz</span><i className="fas fa-caret-right"></i></div></Link>
      <Link to='/complaints'><div className="Menu"><span>Complaints</span><i className="fas fa-caret-right"></i></div></Link>
      <div className="MenuFooter"><i className="far fa-copyright"></i> 2020 To The New Digital <a target="_blank" rel="noopener noreferrer" href="https://www.tothenew.com/about-us">About</a> <a target="_blank" rel="noopener noreferrer" href="https://www.tothenew.com/contact-us">Help</a></div>
    </Fragment>
  );
}

export default Menu;