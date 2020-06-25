import{
    GET_COMPLAINTS,
    GET_COMPLAINTS_ADMIN,
    COMPLAINT_ERROR,
    ADD_COMPLAINT,
    GET_COMPLAINT_BY_ID,
    DELETE_COMPLAINT,
    UPDATE_COMPLAINT_STATUS
} from '../actions/types';

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
        case GET_COMPLAINTS_ADMIN:
            return {
                ...state,
                complaints: payload,
                loading: false
            };
        case GET_COMPLAINT_BY_ID:
            return {
                ...state,
                complaint: payload,
                loading: false
            };
        case UPDATE_COMPLAINT_STATUS:
            return {
                ...state,
                complaint: payload,
                loading: false
            };
        case ADD_COMPLAINT:{
            return {
                ...state,
                complaints: [payload,...state.complaints],
                loading: false
            }
        };
        case DELETE_COMPLAINT:
            return {
                ...state,
                complaint: state.complaints.filter(complaint => complaint._id !== payload),
                loading: false
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