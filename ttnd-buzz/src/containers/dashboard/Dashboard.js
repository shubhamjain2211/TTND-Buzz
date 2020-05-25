import React from 'react';
import './Dashboard.css';
import Aux from '../../HOC/Aux';
import Logout from '../../components/logout/Logout';
import Banner from '../../components/banner/Banner';

function Dashboard() {
  return (
    <Aux>
      <Logout/>
      <Banner/>
    </Aux>
  );
}

export default Dashboard;
