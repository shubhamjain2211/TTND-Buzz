import{
    GET_BUZZS,
    BUZZ_ERROR
} from '../actions\/types';

const initialState = {
    buzzs: [],
    buzz: null,
    loading: true,
    error: {}
};

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type){
        case GET_BUZZS:
            return {
                ...state,
                buzzs: payload,
                loading: false
            };
        case BUZZ_ERROR:
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