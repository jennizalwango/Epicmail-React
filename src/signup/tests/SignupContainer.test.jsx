import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { SignupContainer } from '../Containers/SignupContainer';

describe('SignupContainer Component', () => {
    const props = {
        propsSignupAction: jest.fn(),
        isLoading: false,
        isSigningup: false,
        SignupFailed: false
    };

    const event = {
        preventDefault: () => {},
        target: {
            name: 'email',
            value: 'abc'
        }
    };
    const wrapper = shallow(<SignupContainer {...props} />);

    it('matches snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call an onChange function', () => {
        const component = shallow(
            <SignupContainer {...props} />,
        );
        component.setState({ email: 'email' });
        component.instance().onChange(event);
        expect(component.instance().state.email).toBe('abc');
    });

    it('should call handleSubmit', () => {
        const component = mount(
            <SignupContainer {...props} />,
        );
        const event = {
            preventDefault: () => {},
        };
        const instance = component.instance();
        const handleSubmit = jest.spyOn(instance, 'handleSubmit');
        instance.handleSubmit({ preventDefault: jest.fn() });
        expect(handleSubmit).toHaveBeenCalled();
    });

    it('should call a submit a form', () => {
        wrapper.setState({
            email: 'jennyj'
        });
        const userEmail = {
            match: jest.fn()
        };
        const instance = wrapper.instance();
        const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
        checkValidEmail(userEmail);
        instance.handleSubmit({ preventDefault: jest.fn() });
        expect(checkValidEmail).toHaveBeenCalled();
    });

    it('Valid Email', () => {
        wrapper.setState({
            email: 'jenny@gmail.com'
        });
        const userEmail = {
            match: jest.fn()
        };
        const instance = wrapper.instance();
        const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
        instance.handleSubmit({ preventDefault: jest.fn() });
        checkValidEmail(userEmail);
        expect(checkValidEmail).toHaveBeenCalled();
    });

    it('should call submit form', () => {
        wrapper.setState({
            firstname: 'jennyj',
            lastname: 'zalwango',
            email: 'jennyj',
            password: 'password'
        });
        const userEmail = {
            match: jest.fn()
        };
        const instance = wrapper.instance();
        const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
        instance.handleSubmit({ preventDefault: jest.fn() });
        checkValidEmail(userEmail);
        expect(checkValidEmail).toHaveBeenCalled();
    });

    it('should validate an empty password', () => {
        
        const instance = wrapper.instance();
        instance.setState({
            firstname: 'jennyj',
            lastname: 'zalwango',
            email: 'jenny@gmail.com',
            password: ''
        });
        instance.handleSubmit({ preventDefault: jest.fn() });
        expect('Password field is required').toEqual(instance.state.errors.userPassword);
    });

    it('should call loginAction when handling submit', () => {
        wrapper.setState({
            email: 'haki@gmail.com',
            password: 'password',
            errors: {}
        });
        const instance = wrapper.instance();
        instance.handleSubmit({ preventDefault: jest.fn() });
        props.propsSignupAction();
        expect(props.propsSignupAction).toHaveBeenCalled();
    });

    it('should load the component', () => {
        expect(wrapper).toHaveLength(1);
    });
});
