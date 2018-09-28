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
const Stars = ({ count }) => {
  const emptyRange = Array(count).fill(null);

  return (
    <section id="stars">
      {
        emptyRange.map((item, index) => (
          <i
            key={index}
            className="fas fa-star"
          />
        ))
      }
    </section>
  )

}

export default Stars;
