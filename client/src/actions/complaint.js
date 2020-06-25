import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_COMPLAINTS,
    GET_COMPLAINTS_ADMIN,
    COMPLAINT_ERROR,
    ADD_COMPLAINT,
    GET_COMPLAINT_BY_ID,
    DELETE_COMPLAINT,
    UPDATE_COMPLAINT_STATUS
} from './types';

// GET COMPLAINTS FOR USER
export const getComplaints = () => async dispatch => {
    try {
        const res = await axios.get('/api/complaint');

        dispatch({
            type: GET_COMPLAINTS,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// GET COMPLAINTS FOR USER "Open"
export const getOpen = () => async dispatch => {
    try {
        const res = await axios.get('/api/complaint/open');

        dispatch({
            type: GET_COMPLAINTS,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// GET COMPLAINTS FOR USER "Progress"
export const getProgress = () => async dispatch => {
    try {
        const res = await axios.get('/api/complaint/progress');

        dispatch({
            type: GET_COMPLAINTS,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// GET COMPLAINTS FOR USER "Resolved"
export const getResolved = () => async dispatch => {
    try {
        const res = await axios.get('/api/complaint/resolved');

        dispatch({
            type: GET_COMPLAINTS,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// GET COMPLAINTS FOR ADMIN
export const getComplaintsAdmin = () => async dispatch => {
    try {
        const res = await axios.get('/api/complaint/admin');

        dispatch({
            type: GET_COMPLAINTS_ADMIN,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// GET COMPLAINT BY ID
export const getComplaintById = id => async dispatch => {
    try {
        const res = await axios.get(`/api/complaint/${id}`);

        dispatch({
            type: GET_COMPLAINT_BY_ID,
            payload: res.data
        });
        
    } catch (err) {
        // console.log(err)
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// UPDATE COMPLAINT STATUS
export const updateStatus = id => async dispatch => {
    try {
        const res = await axios.put(`/api/complaint/update/${id}`);

        dispatch({
            type: UPDATE_COMPLAINT_STATUS,
            payload: res.data
        });

        dispatch(setAlert('Status Updated', 'success'));

    } catch (err) {
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// DELETE COMPLAINT
export const deleteComplaint = id => async dispatch => {
    try {
        if(window.confirm('Are you sure you want to delete?')){
        const res = await axios.delete(`/api/complaint/${id}`);
        dispatch({
            type: DELETE_COMPLAINT,
            payload: id
        });

        dispatch(setAlert('Complaint Removed', 'success'));
    }
    else console.log('Cancelled');
    
    } catch (err) {
        dispatch({
            type: COMPLAINT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// ADD COMPLAINT
export const addComplaint = (text, department, issueTitle, formFile) => async dispatch => {

    try { 
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };

          let response = await axios.post(
            '/api/upload',
            formFile,
            config,
          );

          const image = response.data.path;

          const formData = JSON.stringify({ text, department, issueTitle, image});
           
            // console.log(formData);

          const config1 = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
          const res = await axios.post('/api/complaint', formData, config1);

            dispatch({
                type: ADD_COMPLAINT,
                payload: res.data
            });

            dispatch(setAlert('Complaint Created', 'success'));
            } catch (err) {
                // console.log(err);
            dispatch({
                type: COMPLAINT_ERROR,
                payload: {msg: err.response.statusText, status: err.response.status }
            });
    }
}