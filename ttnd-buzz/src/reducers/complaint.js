import{
    GET_COMPLAINTS,
    COMPLAINT_ERROR,
    ADD_COMPLAINT
} from '../actions\/types';

const initialState = {
    complaints: [],
    complaint: null,
    loading: true,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type){
        case GET_COMPLAINTS:
            return {
                ...state,
                complaints: payload,
                loading: false
            };
        case ADD_COMPLAINT:{
            return {
                ...state,
                buzzs: [payload,...state.buzzs],
                loading: false
            }
        };
        case COMPLAINT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default: {
            return state;
        };
    };
};