import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_BUZZS,
    BUZZ_ERROR,
    UPDATE_LIKES,
    UPDATE_DISLIKES,
    DELETE_BUZZ,
    ADD_BUZZ
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

// GET Acitivity BUZZ
export const getActivityBuzz = () => async dispatch => {
    try {
        const res = await axios.get('/api/buzz/activity');

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

// GET Lost and Found BUZZ
export const getLAFBuzz = () => async dispatch => {
    try {
        const res = await axios.get('/api/buzz/lostandfound');

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
            payload: { id, dislikes: res.data}
        });
    } catch (err) {
        dispatch({
            type: BUZZ_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}
// DELETE BUZZ
export const deleteBuzz = id => async dispatch => {
    try {
        if(window.confirm('Are you sure you want to delete?')){
        const res = await axios.delete(`/api/buzz/${id}`);
        dispatch({
            type: DELETE_BUZZ,
            payload: id
        });

        dispatch(setAlert('Buzz Removed', 'success'));
    }
    else console.log('Cancelled');
        
    } catch (err) {
        dispatch({
            type: BUZZ_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}
// ADD BUZZ
export const addBuzz = (text,category,formFile) => async dispatch => {

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

        //   console.log('response::image', image);

          const formData = {text:text,category:category,image:image};

          const config1 = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
          const res = await axios.post('/api/buzz', formData, config1);

            dispatch({
                type: ADD_BUZZ,
                payload: res.data
            });

            dispatch(setAlert('Buzz Created', 'success'));
            } catch (err) {
            dispatch({
                type: BUZZ_ERROR,
                payload: {msg: err.response.statusText, status: err.response.status }
            });
    }
}