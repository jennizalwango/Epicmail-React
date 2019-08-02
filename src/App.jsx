import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import LoginContainer from './Login/containers/LoginContainer';
import SignupContainer from './signup/Containers/SignupContainer';
import MessageContainer from './fetchallMessges/Container/Messagecontainer';
export default function App () {
    return (
        <Router history={history}>
            <ToastsContainer store={ToastsStore}/>
            <Switch>
                <Route path="/" exact component={LoginContainer} />
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/signup" exact component={SignupContainer} />
                <Route path="/messages" exact component={MessageContainer} />
            </Switch>
        </Router>
    );
}
