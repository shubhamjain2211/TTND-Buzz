import React from 'react';
import './App.css';
import Aux from './HOC/Aux';
import Login from './containers/login/Login';
import Dashboard from './containers/dashboard/Dashboard';

function App() {
  return (
    <Aux>
    <Login/>
    {/* <Dashboard/> */}
    </Aux>
  );
}

export default App;
