import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_BUZZS,
    BUZZ_ERROR,
    UPDATE_LIKES,
    UPDATE_DISLIKES
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

// ADD LIKE
export const addLike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/buzz/like/${id}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data}
        });
    } catch (err) {
        dispatch({
            type: BUZZ_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// ADD DislIKE
export const addDislike = id => async dispatch => {
    try {
        const res = await axios.put(`/api/buzz/dislike/${id}`);

        dispatch({
            type: UPDATE_DISLIKES,
            payload: { id, likes: res.data}
        });
    } catch (err) {
        dispatch({
            type: BUZZ_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}