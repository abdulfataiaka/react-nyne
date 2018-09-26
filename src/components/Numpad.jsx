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
const Numpad = () => {
  const range = Array(9).fill(1).map(
    (num, index) => num + index
  );

  return (
    <Fragment>
      { range.map(num => (
        <button
          key={num}
        >
          {num}
        </button>
      )) }
      <button>=</button>
    </Fragment>
  );
}

export default Numpad;
