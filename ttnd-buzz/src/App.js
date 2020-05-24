import React from 'react';
import './App.css';
import Aux from './HOC/Aux';
import Login from './containers/login/Login';
import Banner from './HOC/banner/Banner';

function App() {
  return (
    <Aux>
    <Login/>
    </Aux>
  );
}

export default App;
