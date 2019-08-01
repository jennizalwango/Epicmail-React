import React from 'react';
// import './App';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginContainer from './Login/containers/LoginContainer';
// import 'react-toastify/dist/ReactToastify.css';
// import store from './Mainstore/Store';
// import history from './commons/history';

export default function App () {
    return (
        <Router history={history}>
            <ToastContainer />
            <Switch>
                <Route path="/login" exact component={LoginContainer} />
            </Switch>
        </Router>
    );
}
