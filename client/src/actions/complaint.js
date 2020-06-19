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
        // console.log(err)
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

            dispatch(setAlert('COMPLAINT Created', 'success'));
            } catch (err) {
                // console.log(err);
            dispatch({
                type: COMPLAINT_ERROR,
                payload: {msg: err.response.statusText, status: err.response.status }
            });
    }
}