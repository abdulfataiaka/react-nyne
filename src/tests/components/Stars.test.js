import React from 'react';
import { shallow } from 'enzyme';
import Stars from '../../components/Stars';

describe('Stars Component', () => {
  const wrapper = shallow(<Stars count={5} />);

  it('should render successfully', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render 5 stars', () => {
    expect(wrapper.find('i').length).toBe(5);
  });
});
