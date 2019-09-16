import {
    GET_ALL_REPORTS_BEGIN,
    GET_ALL_REPORTS_FAILURE,
    GET_ALL_REPORTS_SUCCESS
} from '../actions/reportActions';

const initState = {
    reports: [],
    loading: false,
    error: null
};

export default function reportReducer(state = initState, action) {
    switch(action.type) {
        case GET_ALL_REPORTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_ALL_REPORTS_SUCCESS:
            return {
                ...state,
                reports: action.payload,
                loading: false
            }
        case GET_ALL_REPORTS_FAILURE:
            return {
                ...state,
                reports: [],
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}