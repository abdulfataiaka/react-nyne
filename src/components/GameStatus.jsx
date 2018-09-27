import React from 'react';

/**
 * 
 * 
 * @description Stars Component
 * 
 * @name Stars
 * 
 * @returns { JSX }
 */
const GameStatus = ({ status, startRound }) => {
  return (
    <div
      id="game-status"
      style={{
        display: status === 0 ? 'none' : 'block'
      }}
    >
      <div className="overlay" />
      <div className="content">
        <div>
          <span className="icon">
            <span className={ status > 0 ? 'success' : 'danger' }>
              <i
                className={
                  `fas ${ status > 0 ? 'fa-thumbs-up' : 'fa-times' }`
                }
              />
            </span>
          </span>

          <span className={`message ${ status < 0 ? 'danger' : '' }`}>
            { `You ${ status > 0 ?  'won' : 'lost' } the round` }
          </span>

          <button
            type="button"
            className="btn-unstyled"
            onClick={startRound}
          >
            { status > 0 ?  'Continue' : 'Play Again' }
          </button>
        </div>
      </div>
    </div>
  )

}

export default GameStatus;
