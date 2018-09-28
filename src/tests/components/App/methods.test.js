import React from 'react';
import { mount } from 'enzyme';
import App from '../../../components/App';

const answersMock = [
  {
    used: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    selected: []
  },
  {
    used: [],
    selected: []
  }
];

const numpadBtnClickEvent = (num) => ({
  target: {
    innerHTML: num
  }
});

const answerVerifyState = [
  {
    stars: 5,
    answers: {
      used: [],
      selected: [ 1, 2 ]
    }
  },
  {
    stars: 5,
    answers: {
      used: [],
      selected: [ 3, 2 ]
    }
  }
];

describe('App Component Methods', () => {
  const wrapper = mount(<App />);
  const app = wrapper.instance();
  
  describe('componentWillMount', () => {
    it('should have set random number of stars', () => {
      expect(app.state.stars).toBeGreaterThan(0);
    });
  });
  
  describe('ComponentDidUpdate', () => {
    
    it('should have gameStatus to be 0', () => {
      app.setState({
        answers: { ...answersMock[1] },
        refresh: 0
      });
      expect(app.state.gameStatus).toBe(0);
    });

    it('should have gameStatus to be -1', () => {
      app.setState({
        stars: 1,
        answers: { ...answersMock[1], used: [ 1 ] },
        refresh: 0
      });
      expect(app.state.gameStatus).toBe(-1);
    });

    it('should have gameStatus to be 1', () => {
      app.setState({
        gameStatus: 0,
        answers: { ...answersMock[0] },
        refresh: 5
      });
      expect(app.state.gameStatus).toBe(1);
    });
  });

  describe('possibleCombExists', () => {
    it('should not have possible combination', () => {
      expect(app.possibleCombExists([1, 2, 3, 4, 5, 9], 9)).toBe(false);
    });

    it('should have possible combination', () => {
      expect(app.possibleCombExists([4, 5, 6], 9)).toBe(true);
    });
  });

  describe('openModal and closeModal', () => {
    it('should set modal type to info', () => {
      app.openModal('info');
      expect(app.state.modal.type).toBe('info');
    });

    it('should set modal type to null', () => {
      app.closeModal();
      expect(app.state.modal.type).toBe(null);
    });
  });

  describe('answerVerifyClick and renderThumb', () => {
    it('should have thumb state set to down', () => {
      app.setState(answerVerifyState[0]);
      app.answerVerifyClick();
      expect(app.state.thumb).toBe('down');
    });

    it('should have showNext state set to true', () => {
      app.setState(answerVerifyState[1]);
      app.answerVerifyClick();
      expect(app.state.showNext).toBe(true);
      expect(app.state.answers.used).toEqual(
        answerVerifyState[1].answers.selected
      );
    });
  });
});
