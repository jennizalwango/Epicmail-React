import signupTypes from '../redux/types';
import signupReducer from '../redux/reducers/signupReducer';

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

describe('Test for signup reducer', () => {
    
    it('should successfully signup', () => {
        const dispatchedAction = {
            type: signupTypes.SIGNUP_SUCCESS,
            payload: {
                username: 'makasa',
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
                email: 'haki@gmail.com'
            }
        };
        const newState = {
            ...initialState,
            signup_success: {
                username: 'makasa',
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
                email: 'haki@gmail.com'
            },
            is_signed_up: true
        };
        expect(signupReducer(initialState, dispatchedAction)).toEqual(newState);
    });
    it('Test  unsuccessfully signup', () => {
       
        const dispatchedAction = {
            type: signupTypes.SIGNUP_ERROR,
            payload: {
                res: {
                    errors: {
                        "email":"required"
                    }
                }
            }
        };
        const newState = {
            ...initialState,
            isSigningup: false,
            signup_failed: true

        };
        expect(signupReducer(initialState, dispatchedAction)).toEqual(newState);
    });
    it('test is signingup', () => {
        const dispatchedAction = {
            type: signupTypes.IS_SIGNNIG_UP,
        };
        const newState = {
            ...initialState,
            is_signing_up: true,
            signup_failed: false,
            isLoading: true

        };
        expect(signupReducer(initialState, dispatchedAction)).toEqual(newState);
    });
});
