import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Navigation from '../shared/Navigation';

describe('Sign in form', () => {
  it('should render', () => {
    const navWrapper = mount(<Navigation />);
    expect(toJson(navWrapper)).toMatchSnapshot();
  });

  it('should render correctly as a login form', () => {
    const props = {
      signedIn: true,
      name: 'Billal'
    };

    const navWrapper = mount(<Navigation {...props} />);
    expect(navWrapper.find('#nav-user-name').text()).toEqual('Hello Billal');
  });
});
