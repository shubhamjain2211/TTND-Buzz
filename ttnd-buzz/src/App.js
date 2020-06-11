import React, { Fragment,useEffect } from 'react';
import './App.css';
import Login from './containers/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './containers/login/forms/Loginform';
import RegisterForm from './containers/login/forms/Registerform';
import Alert from './components/layouts/Alert';
import Dashboard from './containers/dashboard/Dashboard';

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
