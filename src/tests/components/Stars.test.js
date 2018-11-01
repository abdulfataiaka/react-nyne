import React from 'react';
import { shallow } from 'enzyme';
import Stars from '../../components/Stars';

describe('Stars Component', () => {
  let wrapper = shallow(<Stars count={5} />);

  it('should render successfully', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render 5 stars', () => {
    expect(wrapper.find('i').length).toBe(5);
  });

  it('should render 7 stars', () => {
    wrapper = shallow(<Stars count={7} />);
    expect(wrapper.find('i').length).toBe(7);
  });

  it('should render 1 stars', () => {
    wrapper = shallow(<Stars count={1} />);
    expect(wrapper.find('i').length).toBe(1);
  });

  it('should render 8 stars', () => {
    wrapper = shallow(<Stars count={8} />);
    expect(wrapper.find('i').length).toBe(8);
  });

  it('should render 9 stars', () => {
    wrapper = shallow(<Stars count={9} />);
    expect(wrapper.find('i').length).toBe(9);
  });
});
