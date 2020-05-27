import React from 'react';
import './Menu.css';
import Aux from '../../HOC/Aux';

function Menu() {
  return (
    <Aux>
      <div className="Menu"><span>Buzz</span><i class="fas fa-caret-right"></i></div>
      <div className="Menu"><span>Complaints</span><i class="fas fa-caret-right"></i></div>
      <div className="Menu"><span>Resolved</span><i class="fas fa-caret-right"></i></div>
      <div className="MenuFooter"><i class="far fa-copyright"></i> 2016 To The New Digital <a href="#">About</a> <a href="#">Help</a></div>
    </Aux>
  );
}

export default Menu;
