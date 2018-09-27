import React from 'react';
import { shallow } from 'enzyme';
import Numpad from '../components/Numpad';

describe('Numpad Component', () => {
  const wrapper = shallow(<Numpad />);

  it('should render successfully', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render all 9 buttons and equal button', () => {
    expect(wrapper.find('button').length).toBe(10);
  });
});
