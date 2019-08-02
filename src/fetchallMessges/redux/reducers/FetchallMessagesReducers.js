import {
    IS_FETCHING_MESSAGE,
    FETCH_ALL_MESSAGE_SUCCESS,
    FETCH_ALL_MESSAGE_ERROR
} from '../actions/types';
const initialState = {
    fetch_messages_errors: '',
    all_messages: [],
    fetch_meassage_failed: false,
    isLoading: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_ALL_MESSAGE_SUCCESS:
            return {
                ...state,
                all_messages: payload,
                isLoading: false
            };
        case FETCH_ALL_MESSAGE_ERROR:
            return {
                ...state,
                fetch_messages_errors: true,
                isLoading: false
            };
        case IS_FETCHING_MESSAGE:
            return {
                ...state,
                fetch_meassage_failed: false,
                isLoading: true
            };
        default:
            return state;
    }
}
