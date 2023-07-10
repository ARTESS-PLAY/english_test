import React from 'react';

const Information = () => {
  return (
    <div className='info-container'>
      <p><b>INSTRUCTIONS TO CANDIDATES</b></p>
      <ul>
        <li>Answer <b>all</b> the questions.</li>
        <li>You can change your answers at any time during the test.</li>
      </ul>
      <p><b>INFORMATION FOR CANDIDATES</b></p>
      <ul>
        <li>There are 40 questions in this test.</li>
        <li>Each question carries one mark.</li>
        <li>There are four parts to the test.</li>
        <li>Please note you will only hear each part once in your actual test. However for familiarisation and practice purposes, this familiarisation test will allow you to listen to each recording multiple times.</li>
        <li>For each part of the test there will be time for you to look through the questions and time for you to check your answers.</li>
      </ul>
    </div>
  );
}

export default Information;
