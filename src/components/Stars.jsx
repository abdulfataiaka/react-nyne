import React, { Fragment } from 'react';

/**
 * 
 * 
 * @description Stars Component
 * 
 * @name Stars
 * 
 * @returns { JSX }
 */
const Stars = ({ count }) => {
  const emptyRange = Array(count).fill(null);

  return (
    <Fragment>
      {
        emptyRange.map((item, index) => (
          <i
            key={index}
            className="fas fa-star"
          />
        ))
      }
    </Fragment>
  )

}

export default Stars;
