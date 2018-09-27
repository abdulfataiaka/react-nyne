import React, { Component } from 'react';
import Stars from './Stars';
import Numpad from './Numpad';
import Modal from './Modal/Index';
import { modalTypes } from '../helpers';

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
  state = {
    stars: 9,
    answers: [ 4, 5, 6 ],
    refresh: 5,
    thumb: null,
    
    modal: {
      type: null,
      props: {}
    }
  }

  openModal = (type, props={}) => {
    if (!modalTypes.includes(type)) {
      return;
    }

    this.setState({
      modal: { type, props }
    });
  }

  closeModal = () => {
    this.setState({
      modal: {
        type: null,
        props: {}
      }
    });
  }

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

  renderAnswers = () => {
    const { answers } = this.state;

    return answers.length > 0
      ? (
        <div className="selected">
          {answers.map(answer => (
            <button
              type="button"
              key={answer}
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

  render() {
    const { stars, refresh, thumb, modal } = this.state;

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

          <section id="stars">
            <Stars count={stars} />
          </section>

          <section id="answers" className="clearfix">
            { this.renderAnswers() }
          </section>

          <section id="numpad" className="clearfix">
            <Numpad />
          </section>

          <section id="refresh" className="clearfix">
            <button>
              <i className="fas fa-sync-alt" />
              <span>{ refresh }</span>
            </button>

            <div>
              Refresh remaining
            </div>

            { this.renderThumb(thumb) }
          </section>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App;
