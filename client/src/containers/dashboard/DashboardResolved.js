import React,{Fragment,useEffect} from 'react';
import './Dashboard.css';
import Logout from '../../components/logout/Logout';
import Banner from '../../components/banner/Banner';
import Menu from '../../components/menu/Menu';
import MenuAdmin from '../../components/menu/MenuAdmin';
import Complaintbox from '../../components/complaintbox/Complaintbox';
import CreateBuzz from '../../components/createbuzz/Createbuzz';
import { connect } from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../../components/layouts/Spinner';
import CreateProfile from '../../components/create-profile/create-profile';
import Buzz from '../../components/buzz/Buzz';
import Complaints from '../../components/complaints/Complaints';
import Resolved from '../../components/resolved/Resolved';

const Dashboard = ({ getCurrentProfile, auth, profile:{profile,loading} })   => {

  useEffect(() => { 
    getCurrentProfile();
  },[]);

//Redirect if not Authenticated
  if(!auth.isAuthenticated && !auth.loading) {
    return <Redirect to='/'/>
  }

  return loading && profile === null ? <Spinner/> : 
    <Fragment>
      <Logout/>
      <Banner/>
      {profile !== null? 
      <Fragment>
        <div className="Dashboard">
          <div className="DashboardMenu">
            <div className="WelcomeHover">
              <p className="Welcome"><i className="fas fa-user"></i> Welcome { auth.user && auth.user.name }</p>
              <span className="Email">Logged in as { auth.user && auth.user.email }</span>
            </div>
            {profile.status=='Admin'?<MenuAdmin/>:<Menu/>}
          </div>
          <div className="DashboardArea">
            <Resolved/>
          </div>
        </div>
      </Fragment> : 
      <Fragment>
        <div className="DashboardProfile">
          <h2>TTN-Buzz</h2>
          <p>Looks like you have logged in for the first time</p>
          <p>Please help us know your role in <strong>To The New</strong></p><br/>
          <CreateProfile/>
        </div>
      </Fragment>}
    </Fragment>
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);