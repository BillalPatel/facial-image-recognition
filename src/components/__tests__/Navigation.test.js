import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Navigation from '../shared/Navigation';

describe('Navigation bar', () => {
  it('should render', () => {
    const navWrapper = mount(<Navigation />);
    expect(toJson(navWrapper)).toMatchSnapshot();
  });

  it('should render correctly as default', () => {
    const props = {
      signedIn: false
    };

    const navWrapper = mount(<Navigation {...props} />);
    expect(navWrapper.find('#nav-user-name').exists()).toEqual(false);
    expect(navWrapper.find('#signout-link').exists()).toEqual(false);
  });

  it('should display the name and signout open when logged in', () => {
    const props = {
      signedIn: true,
      name: 'Billal'
    };

    const navWrapper = mount(<Navigation {...props} />);
    expect(navWrapper.find('#nav-user-name').text()).toEqual('Hello Billal');
    expect(navWrapper.find('#signout-link').exists()).toEqual(true);
  });

  it('should not display name or signout option when signing out', () => {
    const props = {
      signedIn: true,
      name: 'Billal',
      mockFunction: jest.fn()
    };

    const navWrapper = mount(<Navigation {...props} onRouteChange={props.mockFunction} />);
    navWrapper.find('#signout-link').props().onClick();
    expect(props.mockFunction).toHaveBeenCalledTimes(1);
  });
});
