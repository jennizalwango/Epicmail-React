import {
    createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../Login//redux/reducers/loginReducer';
import signupReducer from '../signup/redux/reducers/signupReducer';

const reducers = combineReducers({
    login: loginReducer,
    signup: signupReducer
});

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const store = createStore(
    reducers, enhancers,
);
export default store;
