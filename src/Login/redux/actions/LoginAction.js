import { ToastsStore } from 'react-toasts';
import axios from 'axios';
import loginTypes from '../types';
import loginUrl from '../loginUrls';

const loginAction = (userdata, props) => (dispatch) => {
    dispatch({
        type: loginTypes.IS_LOGGING_IN
    });
    return axios.post(loginUrl.LOGIN_URL, userdata
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then((res) => {
            ToastsStore.success('Logged in', 'success', 5000);
            localStorage.setItem('auth-token', res.data.data[0].token);
            localStorage.setItem('fistname', res.data.data[0].user.firstname);
            localStorage.setItem('email', res.data.data[0].user.email);
            dispatch({
                type: loginTypes.LOGIN_SUCCESS,
                payload: res.data.user
            });
            // Routing to the inbox on sucessful login
            props.history.push('/messages');
        })
        .catch((error) => {
            dispatch({
                type: loginTypes.LOGIN_ERROR,
                payload: error
            });
        });
};

export default loginAction;
