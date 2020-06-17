import React,{Fragment} from 'react';
import './Logout.css';
import Logo from '../../resources/logo/ttn.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Logout = ({ auth: {isAuthenticated, loading}, logout }) => {

  return (
    <Fragment> 
      <div className="logout">
        <img className="logo" src={Logo} alt="TTN Logo"/>
        <div>
          <a onClick={logout} href='#!'>Logout <i className="fas fa-sign-out-alt"></i></a>
        </div>
      </div>
    </Fragment>  
  );
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Logout);
