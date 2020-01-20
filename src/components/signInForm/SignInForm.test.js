/* eslint-disable no-unused-expressions */
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount, render } from 'enzyme';

import SignInForm from '../SignInForm';

describe('Sign in form', () => {
//   let formWrapper;

  beforeEach(() => {
    // formWrapper = shallow(<Form />);
  });

//   it('should be displayed landing on the application', () => {
//     const props = {
//       setUserName: 'Test User',
//       onRouteChange: 'landing'
//     };
//   });

  it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = mount(<SignInForm />);

    // wrapper.find('#email-address').simulate('change'), { target: { name: 'email-address', value: 'test@testing.com' } };
    // expect(wrapper.find('#email-address')).toBeTruthy();

    // expect(wrapper.find('#email-address')).toBeTruthy();

    // state('signInEmail')).toEqual('test');

    expect(toJson(wrapper)).toMatchSnapshot();
    // expect(shallow(<Form {...props} />)).toMatchSnapshot();
  });
});
