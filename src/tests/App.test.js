import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App Component', () => {
  const wrapper = shallow(<App />);

  describe('Layout Components Check', () => {
    it('should render successfully', () => {
      expect(wrapper.length).toBe(1);
    });

    it('should have the modal component', () => {
      expect(wrapper.find('Modal').length).toBe(1);
    });

    it('should have the stars component', () => {
      expect(wrapper.find('Stars').length).toBe(1);
    });

    it('should have the numad component', () => {
      expect(wrapper.find('Numpad').length).toBe(1);
    });
  });
});
