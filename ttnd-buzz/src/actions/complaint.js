import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_COMPLAINTS,
    COMPLAINT_ERROR
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