import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginContainer from './Login/containers/LoginContainer';
import SignupContainer from './signup/Containers/SignupContainer'


export default function App () {
    return (
        <Router history={history}>
            <ToastContainer />
            <Switch>
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/signup" exact component={SignupContainer} />
            </Switch>
        </Router>
    );
}
