import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {IS_FETCHING_MESSAGE,FETCH_ALL_MESSAGE_SUCCESS,FETCH_ALL_MESSAGE_ERROR } from '../redux/actions/types';
import FetchallMessagesAction from '../redux/actions/FetchallMessagesAction';

describe('Testing fetch Action', () => {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    beforeEach(() => moxios.install(axios));
    afterEach(() => moxios.uninstall(axios));
    it('should fetch Action',()=>{
        const expectedResponse = {
            user: {
            username: 'zalwango',
            token: 'eyJ0eXAiOiJKV1QiLCJhbGc',
            email: 'jennyzalwango12@gmail.com',
            },
        };
        const expectedActions = [
            {
                type: IS_FETCHING_MESSAGE,
            },
            {
                type: FETCH_ALL_MESSAGE_SUCCESS,
                payload: expectedResponse.user
            },
        ];
        
        moxios.wait(() =>{
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: expectedResponse,
                });
            const store = mockStore({});
            
            return store.dispatch(FetchallMessagesAction()).then(() => {
                expect(store.getActions()[0]).toEqual(expectedActions[0]);
              });
        });
    })

    it('should fetch Action',()=>{
        const expectedResponse = {
                  error: "signup failed",
        };
        const expectedActions = [
            {
                type: IS_FETCHING_MESSAGE,
            },
            {
                type: FETCH_ALL_MESSAGE_ERROR,
                payload: expectedResponse.user
            },
        ];
        
        moxios.wait(() =>{
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 400,
                    response: expectedResponse,
                });
            const store = mockStore({});
            
            return store.dispatch(FetchallMessagesAction()).then(() => {
                expect(store.getActions()[0]).toEqual(expectedActions[0]);
              });
        });
    })

});


