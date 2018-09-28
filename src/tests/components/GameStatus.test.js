import React from 'react';
import { shallow } from 'enzyme';
import GameStatus from '../../components/GameStatus';

describe('GameStatus Component', () => {
  const props = {
    status: 0,
    startRound: jest.fn()
  }

  const wrapper = shallow(
    <GameStatus { ...props } />
  );

  it('should render successfully', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should have display of none', () => {
    expect(wrapper.find('#game-status').length).toBe(1);
    expect(
      wrapper
        .find('#game-status')
        .props().style.display
    ).toBe('none');
  });

  it('should render with status 1 and have display of block', () => {
    wrapper.setProps({ status: 1 });
    expect(wrapper.find('#game-status').length).toBe(1);
    expect(
      wrapper
        .find('#game-status')
        .props().style.display
    ).toBe('block');
  });

  it('should render with status -1 and have display of block', () => {
    wrapper.setProps({ status: -1 });
    expect(wrapper.find('#game-status').length).toBe(1);
    expect(
      wrapper
        .find('#game-status')
        .props().style.display
    ).toBe('block');
  });
});
