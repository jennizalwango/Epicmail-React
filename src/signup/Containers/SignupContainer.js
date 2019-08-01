import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Signup from '../Components/SignupComponent';
import signupUtil from '../redux/validations';
import signupAction from '../redux/actions/SignupAction';


export class SignupContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            errors: {
                invalid_email: false
            }
        };
    }

  onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });

      const { target } = event;
      const { name, value } = target;
      const { errors } = this.state;
      switch (name) {
          case 'email':
              if (!this.checkValidEmail(value)) {
                  this.setState({ errors: { userEmail: 'Please provide a valid email address' } });
                  errors.invalid_email = true;
              } else {
                  this.setState({ errors: { userEmail: '' } });
                  errors.invalid_email = false;
              }
              break;
          default:
              break;
      }

      this.setState({ [event.target.name]: event.target.value });
  }

  checkValidEmail = (userEmail) => {
      const mailFormat = signupUtil.SIGNUP_UTILS;
      if (userEmail.match(mailFormat)) {
          return true;
      }
      return false;
  };

  handleSubmit = (event) => {
      event.preventDefault();
      const { email, password, firstname, lastname } = this.state;
      const signupdata = {
          first_name: firstname,
          last_name: lastname,
          email,
          password,
          isAdmin: true
      };

      if (email === '') {
          this.setState({ errors: { userEmail: 'Email field required' } });
      }
      if (password === '') {
          this.setState({ errors: { userPassword: 'Password field is required' } });
      }
      if (firstname === '') {
          this.setState({ errors: { userfirstname: 'firstname field required' } });
      }
      if (lastname === '') {
          this.setState({ errors: { userlastname: 'lastname field is required' } });
      }
      const { propsSignupAction } = this.props;

      const { errors } = this.state;
      if (!errors.invalid_email && errors.userEmail === '') {
          propsSignupAction(signupdata, this.props);
      }
  }

  render () {
      const { email, password, firstname, lastname, errors } = this.state;
      const {
          SignupFailed,
          isLoading,
          isSigningup
      } = this.props;
      return (
          <Signup
              handleSubmit={this.handleSubmit}
              onChange={this.onChange}
              email={email}
              password={password}
              firstname={firstname}
              lastname={lastname}
              errors={errors}
              isSigningup={isSigningup}
              SignupFailed={SignupFailed}
              isLoading={isLoading}
          />
      );
  }
}

SignupContainer.propTypes = {
    propsSignupAction: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isSigningup: PropTypes.bool.isRequired,
    SignupFailed: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    signup: state.signup,
    isSigningup: state.signup.is_signing_up,
    iSignupFailed: state.signup.signup_failed,
    isLoading: state.signup.isLoading
});
export default connect(mapStateToProps, { propsSignupAction: signupAction })(SignupContainer);
