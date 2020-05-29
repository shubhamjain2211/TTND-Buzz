import React from 'react';
import './Dashboard.css';
import Aux from '../../HOC/Aux';
import Logout from '../../components/logout/Logout';
import Banner from '../../components/banner/Banner';
import Menu from '../../components/menu/Menu';
import Complaintbox from '../../components/complaintbox/Complaintbox';
import CreateBuzz from '../../components/createbuzz/Createbuzz';

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
          <CreateBuzz/>
          <Complaintbox/>
        </div>
      </div>
    </Aux>
  );
}

export default Dashboard;
