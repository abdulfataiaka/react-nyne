import React, { Component } from 'react';
import Stars from './Stars';
import Numpad from './Numpad';
import Modal from './Modal/Index';
import GameStatus from './GameStatus';

import {
  modalTypes,
  range,
  random,
  arraySubsets,
  initialAppState,
  verify,
  messages
} from '../helpers';

/**
 * 
 * 
 * @description App Component
 * 
 * @name App
 * 
 * @returns { JSX }
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialAppState
    };
  }

  /**
   * 
   * 
   * @description after update actions
   * 
   * @param { Object } prevProp 
   * @param { Object } prevState 
   * 
   * @memberof App
   */
  componentDidUpdate(prevProp, prevState) {
    const {
      answers: { used },
      stars,
      gameStatus,
      refresh
    } = this.state;
    
    if (gameStatus === 0) {

      if (used.length >= 9) {
        this.setState({
          gameStatus: 1,
          showNext: false
        }); return;
      }

      const check = (
        refresh === 0 &&
        !this.possibleCombExists(used, stars)
      );

      if(check) this.setState({ gameStatus: -1 });
    }
  }

  /**
   * 
   * 
   * @description on mount actions
   * 
   * @memberof App
   */
  componentWillMount() {
    this.setState({
      stars: random()
    });
  }

  /**
   * 
   * 
   * @description reset state
   * 
   * @memberof App
   */
  initPlayOnClick = () => {
    this.setState({
      ...initialAppState,
      stars: random()
    });
  }

  /**
   * 
   * 
   * @description check for possible combinations
   * 
   * @param { Array } answers
   * @param { Integer } stars
   * 
   * @memberof App
   */
  possibleCombExists = (usedNumbers, stars) => {
    const answers = range(1, 9).filter(number => !usedNumbers.includes(number));
    if (answers.includes(stars)) return true;
    const subsets = arraySubsets(answers);

    return subsets.some(subset => {
      return stars === subset.reduce(
        (number, next) => number + next, 0
      );
    });
  }

  /**
   * 
   * 
   * @description open a modal
   * 
   * @param { String } type
   * @param { Object } props
   * 
   * @memberof App
   */
  openModal = (type, props={}) => {
    if (!modalTypes.includes(type)) {
      return;
    }

    this.setState({
      modal: { type, props }
    });
  }

  /**
   * 
   * 
   * @description close an opened modal
   * 
   * @memberof App
   */
  closeModal = () => {
    this.setState({
      modal: {
        type: null,
        props: {}
      }
    });
  }

  /**
   * 
   * 
   * @description show bottom thumb
   * 
   * @param { String } type
   * 
   * @memberof App
   * 
   * @returns { JSX }
   */
  renderThumb = (type) => {
    if (!['up', 'down'].includes(type)) {
      type = '';
    }

    return (
      <span className={`thumb ${type}`}>
        <i className={`fas fa-thumbs-${
          type === 'down' ? 'down' : 'up'
        }`} />
      </span>
    );
  }

  /**
   * 
   * 
   * @description click event handler for answers
   * 
   * @param { Event } event
   * 
   * @memberof App
   */
  answerNumberClick = event => {
    const { target: { innerHTML } } = event;
  
    const {
      answers,
      answers: { selected }
    } = this.state;

    const number = parseInt(innerHTML, 10);
    const selectedNums = [ ...selected ]; 
    selectedNums.splice(selected.indexOf(number), 1);

    this.setState({
      thumb: null,
      answers: {
        ...answers,
        selected: selectedNums
      }
    });
  }

  /**
   * 
   * 
   * @description click event handler for numpad
   * 
   * @param { Event } event
   * 
   * @memberof App
   */
  numPadNumberClick = event => {
    const { answers, answers: { selected } } = this.state;
    const { target: { innerHTML }} = event;

    this.setState({ thumb: null });
    
    if (selected.length >= 5) {
      this.openModal('info', {
        message: messages[0]
      });
    }
    
    else {
      const number = parseInt(
        innerHTML, 10
      );

      if(!selected.includes(number)) {
        this.setState({
          answers: {
            ...answers,
            selected: [ ...selected, number ]
          }
        });
      }
    }
  }

  /**
   * 
   * 
   * @description check combination
   * 
   * @param { Event } event
   * 
   * @memberof App
   */
  answerVerifyClick = () => {
    const {
      answers,
      answers: { used, selected },
      stars
    } = this.state;

    const state = {
      thumb: null
    };

    if( verify(selected, stars)) {
      state.showNext = true;
      state.answers = {
        ...answers,
        used: used.concat(selected),
        selected: []
      }

    } else {
      state.thumb = 'down';
    }

    this.setState(state);
  }

  /**
   * 
   * 
   * @description render answers
   * 
   * @memberof App
   * 
   * @returns { JSX }
   */
  renderAnswers = () => {
    const { answers: { selected } } = this.state;

    return selected.length > 0
      ? (
        <div className="selected">
          {selected.map(answer => (
            <button
              type="button"
              key={answer}
              onClick={this.answerNumberClick}
            >
              { answer}
            </button>
          ))}
        </div>
      )
      : (
        <div className="message">
          No answers has been selected
        </div>
      )
  }
  
  /**
   * 
   * 
   * @description generate next stars
   * 
   * @memberof App
   */
  nextOnClick = () => {
    this.setState(({ stars }) => ({
      stars: random(stars),
      showNext: false
    }));
  }

  /**
   * 
   * 
   * @description refresh stars
   * 
   * @memberof App
   */
  refreshOnClick = () => {
    const { refresh, stars } = this.state;

    if ( refresh === 0 ) {
      this.openModal('info', {
        message: messages[1]
      });
    }

    else {
      this.setState(({ answers, refresh }) => {
        refresh = refresh == 0 ? 0 : refresh - 1;

        return {
          stars: random(stars),
          answers: {
            ...answers,
            selected: []
          },
          refresh
        }
      });
    }
  }

  /**
   * 
   * 
   * @description component render method
   * 
   * @returns { JSX }
   * 
   * @memberof App
   */
  render() {
    const {
      stars,
      refresh,
      thumb,
      modal,
      showNext,
      gameStatus,
      answers
    } = this.state;

    return (
      <div id="wrapper">
        <header>
          REACT NYNE
        </header>
        <main>
          <Modal
            {...modal}
            close={this.closeModal}
          />

          <GameStatus
            status={gameStatus}
            startRound={this.initPlayOnClick}
          />

          <section id="stars">
            <Stars count={stars} />
          </section>

          <section id="answers" className="clearfix">
            { this.renderAnswers() }
          </section>

          <div id="operations">
            <div id="next" style={{
              display: showNext ? 'block' : 'none'
            }}>
              <div className="overlay" />
              <button
                type="button"
                className="btn-unstyled"
                onClick={this.nextOnClick}
              >
                <i className="fas fa-thumbs-up" />
                Next
              </button>
            </div>
          
            <section id="numpad" className="clearfix">
              <Numpad
                answers={answers}
                numClick={this.numPadNumberClick}
                checkClick={this.answerVerifyClick}
              />
            </section>

            <section id="refresh" className="clearfix">
              <button
                type="button"
                onClick={this.refreshOnClick}
              >
                <i className="fas fa-sync-alt" />
                <span>{ refresh }</span>
              </button>

              <div>Refresh remaining</div>
              { this.renderThumb(thumb) }
            </section>
          </div>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App;
