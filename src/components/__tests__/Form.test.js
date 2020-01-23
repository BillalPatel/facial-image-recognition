import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import Form from '../Form/Form';

describe('Sign in form', () => {
  it('should render', () => {
    const formWrapper = mount(<Form />);
    expect(toJson(formWrapper)).toMatchSnapshot();
  });

  it('should render correctly as a login form', () => {
    const loginFormProps = {
      displaySignUpLink: true,
      buttonName: 'Log in'
    };

    const formWrapper = shallow(<Form {...loginFormProps} />);

    expect(formWrapper.find('#name').exists()).toEqual(false);
    expect(formWrapper.find('#email-address').exists()).toEqual(true);
    expect(formWrapper.find('#password').exists()).toEqual(true);
    expect(formWrapper.find('#confirm-password').exists()).toEqual(false);
    expect(formWrapper.find('#submit-button').prop('value')).toEqual('Log in');
    expect(formWrapper.find('#signup-link').exists()).toEqual(true);
  });

  it('should render correctly as a registration form', () => {
    const registerFormProps = {
      formName: 'Register',
      displayNameField: true,
      // nameChange: onNameChange,
      // emailChange: onEmailChange,
      // passwordChange:{onPasswordChange},
      confirmPassword: true,
      buttonName: 'Register!',
      // clickButton:{onSubmitRegistration}
      displaySignUpLink: false
    };

    const formWrapper = mount(<Form {...registerFormProps} />);

    expect(formWrapper.find('#form-title').text()).toEqual('Register');
    expect(formWrapper.find('#firstname').exists()).toEqual(true);
    expect(formWrapper.find('#email-address').exists()).toEqual(true);
    expect(formWrapper.find('#password').exists()).toEqual(true);
    expect(formWrapper.find('#confirm-password').exists()).toEqual(true);
    expect(formWrapper.find('#submit-button').prop('value')).toEqual('Register!');
    expect(formWrapper.find('#signup-link').exists()).toEqual(false);
    expect(formWrapper.find('#signup-link').exists()).toEqual(false);
  });
});
