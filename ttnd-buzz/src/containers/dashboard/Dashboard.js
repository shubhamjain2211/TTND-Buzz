import React,{Fragment} from 'react';
import './Dashboard.css';
import Logout from '../../components/logout/Logout';
import Banner from '../../components/banner/Banner';
import Menu from '../../components/menu/Menu';
import Complaintbox from '../../components/complaintbox/Complaintbox';
import CreateBuzz from '../../components/createbuzz/Createbuzz';
import { connect } from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const Dashboard = ({ auth: {isAuthenticated,loading}}) => {

//Redirect if not Authenticated
  if(!isAuthenticated && !loading) {
    return <Redirect to='/'/>
  }

  return (
    <Fragment>
      <Logout/>
      <Banner/>
      <div className="Dashboard">
        <div className="DashboardMenu">
          <Menu/>
        </div>
        <div className="DashboardArea">
          <CreateBuzz/>
          <Complaintbox/>
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

export default connect(mapStateToProps, null)(Dashboard);