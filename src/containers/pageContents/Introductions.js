import React from 'react';
import Button from '../../components/Button';
import Hint from '../../components/Hint';
import ReactHtmlParser from 'react-html-parser';

const ConfirmDetails = ({ introductions, handleClick }) => {

  return (
    <div className='introduction-container'>
      <h1>{introductions.title}</h1>
      <p>Time: {introductions.time}</p>
      <h2>INSTRUCTIONS TO CANDIDATES</h2>
      <ul>
        { introductions.instructions.map(instruction =>
          <li key={instruction}>{ReactHtmlParser(instruction)}</li>
        )}
      </ul>
      <h2>INFORMATION FOR CANDIDATES</h2>
      <ul>
        { introductions.information.map(information =>
          <li key={information}>{information}</li>
        )}
      </ul>
      <Hint Message={introductions.message} />
      <Button btnText={introductions.btnText} handleClick={handleClick} />
    </div>
  );
}

export default ConfirmDetails;
