import React, { Fragment,useEffect } from 'react';
import './App.css';
import Login from './containers/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './containers/login/forms/Loginform';
import RegisterForm from './containers/login/forms/Registerform';
import Alert from './components/layouts/Alert';
import Dashboard from './containers/dashboard/Dashboard';
import Buzz from './components/buzz/Buzz';
import Complaints from './components/complaints/Complaints';
import Resolved from './components/resolved/Resolved';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
      store.dispatch(loadUser());
  }, []);  //Component Did Mount
  
  return(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/dashboard/buzz' component={Buzz} />
        <Route exact path='/dashboard/complaint' component={Complaints} />
        <Route exact path='/dashboard/resolve' component={Resolved} />
        <Alert />
        <Switch>
          <Route exact path='/loginform' component={LoginForm} />
          <Route exact path='/registerform' component={RegisterForm} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;
