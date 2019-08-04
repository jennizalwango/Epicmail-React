import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Signup from '../Components/SignupComponent';

describe('Signup ', () => {
    let wrapper;
    const signupprops = {
        handleSubmit: jest.fn(),
        onChange: jest.fn(),
        email: '',
        password: '',
        lastname: '',
        firstname: '',
        isSigningup: false,
        password: '',
        errors: {}
    };
    it('renders the signup page', () => {
        wrapper = shallow(<Signup {...signupprops} />);
    });
    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
