import { toast } from 'react-toastify';
import axios from 'axios';
import signupTypes from '../types';
import signupUrl from '../signpUrls';

const signupAction = (signupdata, props) => (dispatch) => {
    dispatch({
        type: signupTypes.IS_SIGNNIG_UP
    });
    return axios.post(signupUrl.SIGNUP_URL, signupdata,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then((res) => {
            toast.success('signned up', 'success', 5000);
            console.log(res);
            dispatch({
                type: signupTypes.SIGNUP_SUCCESS,
                payload: res.data
            });
            props.history.push('/messages');
        })
        .catch((error) => {
            dispatch({
                type: signupTypes.SIGNUP_ERROR,
                payload: error
            });
        });
};
export default signupAction;
