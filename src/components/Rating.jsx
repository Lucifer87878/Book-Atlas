import React from 'react';

const Rating = ({ totalStars, rating, onClick }) => {
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => onClick(index + 1)}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
        >
          {index < rating ? '\u2605' : '\u2606'}
        </span>
      ))}
    </div>
  );
};

export default Rating;
