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
        console.log(err)
        // dispatch({
        //     type: COMPLAINT_ERROR,
        //     payload: {msg: err.response.statusText, status: err.response.status }
        // });
    }
}

// ADD COMPLAINT
export const addComplaint = (text, department, issueTitle, issueId, lockedBy, assignedTo, name, status,email) => async dispatch => {

    try {
        let _id = issueId;
        let user = lockedBy;

          const formData = JSON.stringify({ _id, user, text, name, 
            department, issueTitle, issueId, lockedBy, assignedTo, status});
           
            console.log(formData)

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
                console.log(err)
            // dispatch({
            //     type: COMPLAINT_ERROR,
            //     payload: {msg: err.response.statusText, status: err.response.status }
            // });
    }
}