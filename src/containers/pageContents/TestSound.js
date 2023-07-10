import React from 'react';
import Button from '../../components/Button';
import Hint from '../../components/Hint';

const TestSound = ({ handleClick, updatePlayTestSound, testSoundBtn }) => {
  return (
    <div className='test-sound-container'>
      <h1>Test sound</h1>
      <div>
        <p>Put on your headphones and click on the <b>Play sound</b> button to play a sample sound.</p>
        <Button btnText={testSoundBtn} handleClick={updatePlayTestSound} />
        <Hint Message='If you cannot hear the sound clearly, please tell the invigilator.' />
        <Button btnText='Continue' handleClick={handleClick} />
      </div>
    </div>
  );
}

export default TestSound;
