import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types';

// Get Current User Profiles
export const getCurrentProfile = () => async dispatch => {
    try{
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload : res.data
        });
    } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Create a Profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config= {
            headers: {
                'Content-Type': 'Application/json'
            }
        }

        const res= await axios.post('/api/profile', formData, config);
        
        dispatch({
            type: GET_PROFILE,  
            payload : res.data
        });

        dispatch(setAlert('Profile Created'));

    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error=>dispatch(setAlert(error.msg, 'danger')));
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}}