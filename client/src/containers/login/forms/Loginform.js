import React, {Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { login } from '../../../actions/auth';
import PropTypes from 'prop-types';
import '../Login.css';

const LoginForm = ({ login,isAuthenticated }) => {
  const [formData , setFormData] = useState({
    email:'',
    password:''
  });

  const { email,password } = formData; 

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e =>{
    e.preventDefault();
    login(email,password);
  }

  //Redirect if Authenticated
  if(isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <Fragment>
      <div className='LoginForm'>
      <h1 className="large text-primary">Sign IN</h1>
      <p className="lead"><i className="fas fa-user"></i> Login</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email}
            onChange={e =>onChange(e)}  />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e =>onChange(e)} 
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      </div>
    </Fragment>
  );  
}
LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated  
});

export default connect(
  mapStateToProps, 
  { login }
  )(LoginForm);
