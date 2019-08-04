import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import signupTypes from '../redux/types';
import SignupAction from '../redux/actions/SignupAction'

describe('Testing Auth Action', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  it('Testing User registrationsuccess', () => {
    const expectedResponse = {
      user: {
        firstname: 'jenny',
        lastname: 'zalwango',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGc',
        email: 'jennyzalwango12@gmail.com',
      },
    };

    const expectedActions = [
      {
        type: signupTypes.IS_SIGNNIG_UP,
      },
      {
        type: signupTypes.SIGNUP_SUCCESS,
        payload: expectedResponse.user,
      },
    ];

    const signupdata = {
      user: {
        firstname: 'jenny',
        lastname: 'zalwango',
        email: 'jennyzalwango12@gmail.com',
        password: 'password',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    const props = {
      history: {
        push: jest.fn(),
      },
    };
    return store.dispatch(SignupAction(signupdata, props)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions[0]);
    });
  });

  it('Testing User registration failed', () => {
    const expectedResponse = {
      user: {
        is_sigging_up: false,
        signup_failed: true,
      },
    };
    const expectedActions = [
      {
        type: signupTypes.IS_SIGNNIG_UP,
      },
      {
        type: signupTypes.SIGNUP_ERROR,
      },
    ];
    const signupdata = {
      user: {
        email: 'jszalwango12gmail.com',
        password: 'password1',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    return store.dispatch( SignupAction(signupdata)).then(() => {
      expect(store.getActions()[0]).toEqual(expectedActions[0]);
    });
  });
});
