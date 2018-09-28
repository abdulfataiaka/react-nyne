import React from 'react';
import { shallow } from 'enzyme';
import Numpad from '../../components/Numpad';

describe('Numpad Component', () => {
  const props = {
    answers: {
      used: [],
      selected: []
    }
  };

  const wrapper = shallow(<Numpad { ...props } />);

  it('should render successfully', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render all 9 buttons and equal button', () => {
    expect(wrapper.find('button').length).toBe(10);
  });
});
