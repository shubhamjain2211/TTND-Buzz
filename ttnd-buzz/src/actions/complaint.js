import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_COMPLAINTS,
    COMPLAINT_ERROR,
    ADD_COMPLAINT
} from './types';

// GET COMPLAINTS
export const getComplaints = () => async dispatch => {
    try {
        const res = await axios.get('/api/complaint');

        dispatch({
            type: GET_COMPLAINTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// ADD COMPLAINT
export const addComplaint = (_id, user, text, name, 
    department, issueTitle, issueId, lockedBy, assignedTo, status, date) => async dispatch => {

    try {
          const formData = JSON.Stringify({ _id, user, text, name, 
            department, issueTitle, issueId, lockedBy, assignedTo, status, date });

          const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
          const res = await axios.post('/api/complaint', formData, config);

            dispatch({
                type: ADD_COMPLAINT,
                payload: res.data
            });

            dispatch(setAlert('COMPLAINT Created', 'success'));
            } catch (err) {
            dispatch({
                type: COMPLAINT_ERROR,
                payload: {msg: err.response.statusText, status: err.response.status }
            });
    }
}