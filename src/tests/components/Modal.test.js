import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../components/Modal/Index';

describe('Modal Components', () => {
  const props = {
    type: null,
    props: {},
    close: jest.fn(),
  }

  describe('No Modal Rendered', () => {
    const wrapper = shallow(
      <Modal {...props} />
    );

    it('should render successfully', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should not have any modal-content element', () => {
      expect(wrapper.find('modal-content').length).toBe(0);
    });
  });

  describe('InfoModal Component', () => {
    const newprops = {
      ...props,
      type: 'info'
    }
    const wrapper = shallow(
      <Modal {...newprops} />
    );

    it('should render successfully', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should render info modal', () => {
      expect(wrapper.find('InfoModal').length).toBe(1);
    });
  });
});
