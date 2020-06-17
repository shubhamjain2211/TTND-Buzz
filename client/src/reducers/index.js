import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import buzz from './buzz';
import complaint from './complaint';

export default combineReducers({
    alert,
    auth,
    profile,
    buzz,
    complaint
});