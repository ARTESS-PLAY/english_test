import React from 'react';
import Button from '../../components/Button';
import Hint from '../../components/Hint';

const ConfirmDetails = ({ handleClick }) => {
  return (
    <div className='confirm-container'>
      <h1>Confirm your details</h1>
      <div>
        <p>Name:</p>
        <p>Date of birth:</p>
        <p>Candidate number:</p>
        <Hint Message='If your details are not correct, please inform the invigilator.' />
        <Button btnText='My details are correct' handleClick={handleClick} />
      </div>
    </div>
  );
}

export default ConfirmDetails;
