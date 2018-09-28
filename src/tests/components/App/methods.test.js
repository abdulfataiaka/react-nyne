import React from 'react';
import { mount } from 'enzyme';
import App from '../../../components/App';

const numpadBtnClickEvent = (num) => ({
  target: {
    innerHTML: num
  }
});

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
    it('should not perform any action', () => {
      app.openModal('bad-modal');
      expect(app.state.modal.type).toBe(null);
    });

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

  describe('refreshOnClick', () => {
    it('should show the info modal', () => {
      app.setState({ refresh: 0 });
      app.refreshOnClick();
      expect(app.state.modal.type).toBe('info');
    });

    it('should decrement refresh count', () => {
      app.setState({ refresh: 4 });
      app.refreshOnClick();
      expect(app.state.refresh).toBe(3);
    });
  });

  describe('nextOnClick', () => {
    it('should close the next section', () => {
      app.setState({ showNext: true });
      app.nextOnClick();
      expect(app.state.showNext).toBe(false);
    });
  });

  describe('numPadNumberClick', () => {
    it('should show info for maximum answers selected', () => {
      app.setState({ answers: {
        used: [],
        selected: [4, 6, 7, 2, 1]
      }});
      app.numPadNumberClick(numpadBtnClickEvent(5));
      expect(app.state.modal.type).toBe('info');
    });

    it('should add selected number to selected state', () => {
      app.setState({ answers: {
        used: [],
        selected: [1]
      }});
      app.numPadNumberClick(numpadBtnClickEvent(5));
      expect(app.state.answers.selected.includes(5)).toBe(true);
    });
  });

  describe('answerNumberClick', () => {
    it('should revert selection', () => {
      app.setState({ answers: {
        used: [],
        selected: [1]
      }});
      app.answerNumberClick(numpadBtnClickEvent(1));
      expect(app.state.answers.selected.includes(1)).toBe(false);
    });
  });

  describe('initPlayOnClick', () => {
    it('should reset game', () => {
      app.initPlayOnClick();
      expect(app.state.refresh).toBe(5);
      expect(app.state.answers).toEqual(answersMock[1]);
    });
  });
});
