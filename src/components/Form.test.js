/* eslint-disable no-unused-expressions */
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount, render } from 'enzyme';

import Form from './Form';

describe('Sign in form', () => {
  it('should render', () => {
    const formWrapper = mount(<Form />);
    expect(toJson(formWrapper)).toMatchSnapshot();
  });

  it('should render correctly as a login form', () => {
    const props = {
      displaySignUpLink: true,
      buttonName: 'Log in'
    };

    const formWrapper = shallow(<Form {...props} />);

    expect(formWrapper.find('#name').exists()).toEqual(false);
    expect(formWrapper.find('#email-address').exists()).toEqual(true);
    expect(formWrapper.find('#password').exists()).toEqual(true);
    expect(formWrapper.find('#confirm-password').exists()).toEqual(false);
    expect(formWrapper.find('#submit-button').prop('value')).toEqual('Log in');
    expect(formWrapper.find('#signup-link').exists()).toEqual(true);
  });

  it('should render correctly as a registration form', () => {
    const props = {
      displaySignUpLink: false,
      buttonName: 'Register!'
    };

    const formWrapper = shallow(<Form {...props} />);

    expect(formWrapper.find('#name').exists()).toEqual(true);
    expect(formWrapper.find('#email-address').exists()).toEqual(true);
    expect(formWrapper.find('#password').exists()).toEqual(true);
    expect(formWrapper.find('#confirm-password').exists()).toEqual(true);
    expect(formWrapper.find('#submit-button').prop('value')).toEqual('Register!');
    expect(formWrapper.find('#signup-link').exists()).toEqual(false);
  });
});
