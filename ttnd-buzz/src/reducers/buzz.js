import{
    GET_BUZZS,
    BUZZ_ERROR,
    UPDATE_LIKES,
    UPDATE_DISLIKES
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
        case UPDATE_LIKES:
            return {
                ...state,
                buzzs: state.buzzs.map(buzz => buzz._id === payload.id ? 
                    { ...buzz, likes: payload.likes } : buzz ),
                loading: false
            };
        case UPDATE_DISLIKES: return {
            ...state,
            buzzs: state.buzzs.map(buzz => buzz._id === payload.id ? 
                { ...buzz, dislikes: payload.dislikes } : buzz ),
            loading: false
        };
        default: {
            return state;
        };
    };
};