import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Step1 from './step1';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import sinon from 'sinon';

describe('Contact Information Test Form', () => {
    let wrapper;
    let store;
    let handleSubmit;

    beforeEach( () => {
        handleSubmit = sinon.spy();
        const props = {  }
        
        ;
        store = createStore(combineReducers({ form :  formReducer }));
        wrapper = mount(
            <Provider store={store}><Step1 handleSubmit={handleSubmit} /></Provider>
        );
    });

    it('contains all the form elements with name property for json object onSubmit', () => {
        expect(wrapper.find('input[placeholder="First Name"]').prop('name')).toEqual('firstName');
        expect(wrapper.find('input[placeholder="Last Name"]').prop('name')).toEqual('lastName');

        expect(wrapper.find('button[type="submit"]').length, 1);
        // expect(wrapper.find('input[placeholder="Address"]').prop('name')).toEqual('address');

        // expect(wrapper.find('input[type="select"]').prop('name')).toEqual('phoneType');
        // expect(wrapper.find('input[placeholder="000-000-0000"]').prop('name')).toEqual('phone');
        // expect(wrapper.find('input[placeholder="email"]').prop('name')).toEqual('email');
    });

    it('calls handleSubmit on form submission', () => {
        
        // const wrapper = shallow(<Step1 handleSubmit={handleSubmit} />);
        // console.log(wrapper.find('button[type="submit"]'));
        wrapper.find('button[type="submit"]').simulate('click');
        expect(handleSubmit.calledWith(wrapper.instance().submit));
      });
})