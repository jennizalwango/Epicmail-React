import signupTypes from '../types';

const initialState = {
    token: '',
    username: '',
    is_signed_up: false,
    isSigningup: false,
    signup_errors: undefined,
    signup_failed: false,
    is_signing_up: false,
    isLoading: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case signupTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                signup_success: payload,
                is_signed_up: true,
                isLoading: false
            };
        case signupTypes.SIGNUP_ERROR:
            return {
                ...state,
                signup_errors: payload.message,
                signup_failed: true,
                is_signing_up: false,
                isLoading: false
            };
        case signupTypes.IS_SIGNNIG_UP:
            return {
                ...state,
                is_signing_up: true,
                signup_failed: false,
                isLoading: true
            };
        default:
            return state;
    }
}
