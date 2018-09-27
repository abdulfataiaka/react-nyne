import React, { Fragment } from 'react';

/**
 * 
 * 
 * @description Numpad Component
 * 
 * @name Numpad
 * 
 * @returns { JSX }
 */
const Numpad = ({
  answers: { used, selected },
  numClick,
  checkClick
}) => {
  const grayedNums = used.concat(selected);

  const range = Array(9).fill(1).map(
    (num, index) => num + index
  );

  return (
    <Fragment>
      { range.map(num => (
        <button
          key={num}
          type="button"
          onClick={numClick}
          className={ grayedNums.includes(num) ? 'grayed' : '' }
          disabled={ grayedNums.includes(num) }
        >
          {num}
        </button>
      )) }
      <button
        type="button"
        className={ !selected.length ? 'grayed' : '' }
        disabled={ !selected.length }
        onClick={checkClick}
      >
        <i className="fas fa-check" />
      </button>
    </Fragment>
  );
}

export default Numpad;
