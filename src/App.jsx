import React from 'react';
import {toast} from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginContainer from './Login/containers/LoginContainer';
import SignupContainer from './signup/Containers/SignupContainer';
import MessageContainer from './fetchallMessges/Container/Messagecontainer';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export default function App () {
    return (
        <Router history={history}>
            
            <Switch>
                <Route path="/" exact component={LoginContainer} />
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/signup" exact component={SignupContainer} />
                <Route path="/messages" exact component={MessageContainer} />
            </Switch>
        </Router>
    );
}
