import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../components/Modal/Index';
import InfoModal from '../../components/Modal/InfoModal';

describe('Modal Components', () => {
  describe('No Modal Rendered', () => {
    const props = {
      type: null,
      props: {},
      close: jest.fn(),
    }

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
    const props = {
      message: 'hello there',
      close: jest.fn()
    }
    const wrapper = shallow(
      <InfoModal {...props} />
    );

    const infoModal = wrapper.instance();

    it('should render info modal', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should click button', () => {
      infoModal.okClick();
    });
  });
});
