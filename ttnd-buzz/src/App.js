import React, { Fragment } from 'react';
import './App.css';
import Login from './containers/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './containers/login/forms/Loginform';
import RegisterForm from './containers/login/forms/Registerform';
import Dashboard from './containers/dashboard/Dashboard';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path='/' component={Login} />
        {/* <Dashboard/> */}
        <Switch>
          <Route exact path='/loginform' component={LoginForm} />
          <Route exact path='/registerform' component={RegisterForm} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
