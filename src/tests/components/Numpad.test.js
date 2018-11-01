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

  it('should render exactly button 1', () => {
    expect(wrapper.html()).toContain(1);
  });

  it('should render exactly button 2', () => {
    expect(wrapper.html()).toContain(2);
  });

  it('should render exactly button 3', () => {
    expect(wrapper.html()).toContain(3);
  });

  it('should render exactly button 4', () => {
    expect(wrapper.html()).toContain(4);
  });

  it('should render exactly button 5', () => {
    expect(wrapper.html()).toContain(5);
  });

  it('should render exactly button 6', () => {
    expect(wrapper.html()).toContain(6);
  });

  it('should render exactly button 7', () => {
    expect(wrapper.html()).toContain(7);
  });

  it('should render exactly button 8', () => {
    expect(wrapper.html()).toContain(8);
  });

  it('should render exactly button 9', () => {
    expect(wrapper.html()).toContain(9);
  });
});
