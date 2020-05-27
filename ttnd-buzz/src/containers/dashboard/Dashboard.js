import React from 'react';
import './Dashboard.css';
import Aux from '../../HOC/Aux';
import Logout from '../../components/logout/Logout';
import Banner from '../../components/banner/Banner';
import Menu from '../../components/menu/Menu';

function Dashboard() {
  return (
    <Aux>
      <Logout/>
      <Banner/>
      <div className="Dashboard">
        <div className="DashboardMenu">
          <Menu/>
        </div>
        <div className="DashboardArea">
          <h2>Your Complaints</h2>
        </div>
      </div>
    </Aux>
  );
}

export default Dashboard;
