import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import DemographicText from './DemographicText';

describe('', () => {
  it('should render', () => {
    const wrapper = mount(<DemographicText />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render', () => {
    const props = {
      gender: 'male',
      age: '50'
    };

    const wrapper = mount(<DemographicText {...props} />);
    expect(wrapper.find('#demographic-text').text())
      .toEqual('You are a male and you are approximately 50 years old.');
  });

});
