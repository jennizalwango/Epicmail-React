import React from 'react';
import PropTypes from 'prop-types';
import '../LoginStyles/login.scss';

const Loader = require('react-loader');
const Login = (
    {
        handleSubmit,
        onChange,
        email,
        password,
        errors,
        isLoggingIn,
        loginFailed,
        isLoading
    },
) => (

    <div className="Login-container">
        <div className="header">
            <h2>EPIC MAIL</h2>
            <p><i>"Use this web application to reach out to your family and friends
        from any anywhere the World"</i></p>
        </div>
        <div className="heading" />
        <div className="myform">
            <form>
                <h3>Login</h3>
                <hr/>
                {
                    loginFailed ?
                        (
                            <div className="errors">
            Please provide valid credentials
                                {loginFailed}
                            </div>
                        ) :
                        (<span />)
                }
                <div className="form-input" id="errormessage">
                    <input className="the-Input" type="text" id="userEmail" name="email" placeholder="Email" value={email} onChange={onChange} required />
                    {
                        errors.invalid_email ?
                            (
                                <div className="errors">
               please provide valid email
                                    {errors.userEmail }
                                </div>
                            ) :
                            (<span />)
                    }
                    {
                        errors.userEmail && (<div className="errors">{errors.userEmail}</div>)
                    }
                </div>
                <br />
                <div className="form-input" id="errormessage">
                    <input className="the-Input" type="password" value={password} placeholder="Password" name="password" onChange={onChange} />
                    {
                        errors.userPassword && (<div className="errors">{errors.userPassword}</div>)
                    }
                </div>
                <br />
                <Loader loaded={!isLoading}>
                    <div className="form-input">
                        <button className="mybtn" type="button" onClick={handleSubmit} disabled={isLoggingIn}>
                            { isLoggingIn ? (<span>loading...</span>) : (<span>Login</span>)}
                        </button>
                    </div>
                    <p className="mypara2">
                    Dont have an account? <a href="/signup">Signup</a>
                    </p>
                </Loader>

            </form>
        </div>

    </div>
);

Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isLoggingIn: PropTypes.bool.isRequired,
    loginFailed: PropTypes.bool,
    isLoading: PropTypes.bool
};
Login.defaultProps = {
    loginFailed: false,
    isLoading: false
};
export default Login;
