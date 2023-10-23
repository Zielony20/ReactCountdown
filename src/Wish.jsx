import React from 'react';

const Wish = ({ name }) => {
  return (
    <div className='wish-message'>
      CONGRATULATIONS!!! <span className='highlight'>{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;