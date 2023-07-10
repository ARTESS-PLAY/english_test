import React from 'react';
import Button from '../Button';

const HideButtonPopup = ({ toggleHidePopup }) => {
  return (
    <div className='hide-popup-container'>
      <div className="confirm-container">
        <h1>Screen hidden
          <button onClick={toggleHidePopup} className="close"></button>
        </h1>
        <div className="content">
          <p>Your answers have been stored.</p><p>Please note that the clock is still running. The time has not been paused.</p>
          <p>If you wish to leave the room, please tell your invigilator.</p>
          <p>Click the button below to go back to your test.</p>
          <Button btnText='Resume test' handleClick={toggleHidePopup} />
        </div>
      </div>
    </div>
  );
}

export default HideButtonPopup;
