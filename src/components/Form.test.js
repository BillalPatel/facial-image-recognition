import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

describe('<Form />', () => {
  let formWrapper;

  beforeEach(() => {
    formWrapper = shallow(<Form />);
  });

  it('', () => {
    expect(formWrapper).toMatchSnapshot();
  });
//   it('renders <p />', () => {
//     expect(formWrapper.find('p')).toHaveLength(1);
//   });

//   it('greets the user', () => {
//     const expectedH1 = `Hello ${name}!`;

//     expect(formWrapper.find('p').text()).toEqual(expectedH1);
//   });
});
