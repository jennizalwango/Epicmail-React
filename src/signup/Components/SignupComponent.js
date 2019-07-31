import React from 'react';
import PropTypes from 'prop-types';
import '../../Login/LoginStyles/login.scss';

const Loader = require('react-loader');

const Signup = (
    {
        handleSubmit,
        onChange,
        email,
        password,
        lastname,
        firstname,
        errors,
        isSigningup,
        SignupFailed,
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
                <h3>Signup</h3>
                <hr/>
                {
                    SignupFailed ?
                        (
                            <div className="errors">
            Please provide valid credentials
                                {SignupFailed}
                            </div>
                        ) :
                        (<span />)
                }
                <br />
                <div className="form-input" id="errormessage">
                    <input className="the-Input" type="firstname" value={firstname} placeholder="firstname" name="firstname" onChange={onChange} />
                    {
                        errors.userPassword && (<div className="errors">{errors.userfirstname}</div>)
                    }
                </div>
                <div className="form-input" id="errormessage">
                    <input className="the-Input" type="lastname" value={lastname} placeholder="lastname" name="lastname" onChange={onChange} />
                    {
                        errors.userPassword && (<div className="errors">{errors.userlastname}</div>)
                    }
                </div>

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

                <div className="form-input" id="errormessage">
                    <input className="the-Input" type="password" value={password} placeholder="Password" name="password" onChange={onChange} />
                    {
                        errors.userPassword && (<div className="errors">{errors.userPassword}</div>)
                    }
                </div>
                <Loader loaded={!isLoading}>
                    <div className="form-input">
                        <button className="mybtn" type="button" onClick={handleSubmit} disabled={isSigningup}>
                            { isSigningup ? (<span>loading...</span>) : (<span>Signup</span>)}
                        </button>
                    </div>
                    <p className="mypara2">
           You have an account Login
                    </p>
                </Loader>
            </form>
        </div>

    </div>

);

Signup.propTypes = {
    email: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isSigningup: PropTypes.bool.isRequired,
    SignupFailed: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool
};
Signup.defaultProps = {
    SignupFailed: false,
    isLoading: false
};


export default Signup;
