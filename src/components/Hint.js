import React from 'react';

const Button = ({ Message, type = 'message' }) => {
  return (
    <p className={`hint ${(type === 'warning') ? 'warning' : 'message'}`}>{Message}</p>
  );
}

export default Button;
