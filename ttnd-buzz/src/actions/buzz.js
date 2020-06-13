import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_BUZZS,
    BUZZ_ERROR
} from './types';

// GET BUZZ
export const getBuzz = () => async dispatch => {
    try {
        const res = await axios.get('/api/buzz');

        dispatch({
            type: GET_BUZZS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: BUZZ_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}