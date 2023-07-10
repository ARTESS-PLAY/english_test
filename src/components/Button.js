import React from 'react';

const Button = ({ btnText, handleClick }) => {
  return (
    <button onClick={handleClick}>{btnText}</button>
  );
}

export default Button;
