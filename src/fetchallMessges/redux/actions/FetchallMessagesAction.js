import axios from 'axios';
import allmessageUrl from '../AllmessageUrl';
import {
    IS_FETCHING_MESSAGE,
    FETCH_ALL_MESSAGE_SUCCESS,
    FETCH_ALL_MESSAGE_ERROR
} from './types';

const getAllMessagesSuccessfully = response => (
    {
        type: FETCH_ALL_MESSAGE_SUCCESS,
        payload: response
    }
);

const getAllMessagesFailure = error => (
    {
        type: FETCH_ALL_MESSAGE_ERROR,
        payload: error
    }
);
const Headers = {
    headers: {
        "auth_token": `${localStorage.getItem('auth-token')}`,
        "Accept": 'application/json',
        'Content-type': 'application/json'

    }
};

export const fetchMessages = () => dispatch => {
    dispatch({
        type: IS_FETCHING_MESSAGE
    });
    return axios.get(allmessageUrl.ALL_MESSAGE_URL, Headers)
        .then(response => {
            console.log(response.data.data);
            dispatch(getAllMessagesSuccessfully(response.data.data));
        }).catch(error => {
            dispatch(getAllMessagesFailure(error));
        });
};

export default fetchMessages;
