import React from 'react';
import ScreenCandidate from '../../../assets/images/popups/testhelp/screenCandidate.png';
import ScreenClock from '../../../assets/images/popups/testhelp/screenClock.png';
import ScreenNav from '../../../assets/images/popups/testhelp/screenNav.png';
import NextQBtn from '../../../assets/images/popups/testhelp/next-question-button.png';
import PreviousQBtn from '../../../assets/images/popups/testhelp/previous-question-button.png';
import ScreenReview from '../../../assets/images/popups/testhelp/screenReview.png';
import IconMinimise from '../../../assets/images/popups/testhelp/iconMinimise.png';
import IconMaximise from '../../../assets/images/popups/testhelp/iconMaximise.png';
import ScreenNavCurrent from '../../../assets/images/popups/testhelp/screenNavCurrent.png';
import ScreenNavAnswered from '../../../assets/images/popups/testhelp/screenNavAnswered.png';
import ScreenNavReview from '../../../assets/images/popups/testhelp/screenNavReview.png';
import ScreenNavNormal from '../../../assets/images/popups/testhelp/screenNavNormal.png';
import ScreenRightClick from '../../../assets/images/popups/testhelp/screenRightClick.png';
import ScreenRightHighlight from '../../../assets/images/popups/testhelp/screenRightHighlight.png';
import ScreenRightNotes from '../../../assets/images/popups/testhelp/screenRightNotes.png';
import ScreenNotes from '../../../assets/images/popups/testhelp/screenNotes.png';
import ScreenNotesIcon from '../../../assets/images/popups/testhelp/screenNotesIcon.png';
import ScreenRightClickHighlight from '../../../assets/images/popups/testhelp/screenRightClickHighlight.png';
import ScreenRightClear from '../../../assets/images/popups/testhelp/screenRightClear.png';
import ScreenRightClearAll from '../../../assets/images/popups/testhelp/screenRightClearAll.png';
import ScreenVolume from '../../../assets/images/popups/testhelp/screenVolume.png';


const TestHelp = () => {
  return (
    <div className='test-help-container'>
      <p><b>At the top of the screen you can see:</b></p>
      <img src={ScreenCandidate} height='27' alt='screen candidate' />
      <p>Your name and candidate number.</p>
      <img src={ScreenClock} height='27' alt='screen clock' />
      <p>A clock, which tells you how much time you have left. When you hover over the time you can see the seconds.</p>
      <table className='icon-buttons-container'>
			   <tr>
           <td className='icon help'>
             <span>Help</span>
           </td>
           <td>
             Click to view the help.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <span>Settings</span>
           </td>
           <td>
             Click to change your screen settings.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <span>Hide</span>
           </td>
           <td>
             Click to hide the screen content temporarily.
           </td>
         </tr>
      </table>
      <p className='title'><b>Volume</b></p>
      <p>If you want to change the volume of the Listening test, click on the volume slider.</p>
      <img src={ScreenVolume} height='108' alt='screen volume' />
      <p className='title'><b>Navigation</b></p>
      <p>At the bottom of the screen you can see the navigation bar</p>
      <img src={ScreenNav} height='53' alt='screen nav' />
      <p>Click on a number to go to that question.</p>
      <table>
			   <tr>
           <td className='icon'>
             <img src={NextQBtn} height='56' alt='next question button' />
           </td>
           <td>
             Click to go to the next question.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <img src={PreviousQBtn} height='56' alt='previous question button' />
           </td>
           <td>
             Click to go to the previous question.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <img src={ScreenReview} height='21' alt='screen review' />
           </td>
           <td>
             Click if you want to look at this question again later. The question number in the navigation bar will turn into a circle.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <img src={IconMinimise} height='28' alt='IconMinimise' />
           </td>
           <td>
             Click to make the navigation smaller.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <img src={IconMaximise} height='28' alt='iconMaximise' />
           </td>
           <td>
             Click to make the navigation bigger.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <img src={ScreenNavCurrent} height='43' alt='Screen Nav Current' />
           </td>
           <td>
             The blue highlighting shows the question you are looking at.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <img src={ScreenNavAnswered} height='43' alt='Screen Nav Answered' />
           </td>
           <td>
             The underlining shows that you have answered this question.
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <img src={ScreenNavReview} height='43' alt='Screen Nav Review' />
           </td>
           <td>
             The circle shows that you want to look at this question again (marked for review).
           </td>
         </tr>
         <tr>
           <td className='icon'>
             <img src={ScreenNavNormal} height='43' alt='Screen Nav Normal' />
           </td>
           <td>
             The black highlighting shows that you have not answered the question.
           </td>
         </tr>
      </table>
      <p className='title'><b>Highlighting</b></p>
      <p>To highlight something in the test:</p>
      <p><b>Select the text you want to highlight using the mouse. </b></p>
      <p><b>Right click over the text. </b></p>
      <img src={ScreenRightClick} height='106' alt='Screen Right Click' />
      <table>
        <tr>
          <td className='icon'>
            <img src={ScreenRightHighlight} height='21' alt='ScreenRightHighlight' />
          </td>
          <td style={{ paddingLeft: '25px' }}>
            Click to highlight the text you have selected.
          </td>
        </tr>
        <tr>
          <td className='icon'>
            <img src={ScreenRightNotes} height='21' alt='ScreenRightNotes' />
          </td>
          <td style={{ paddingLeft: '25px' }}>
            Click to highlight the text you have selected and to add notes about what you have highlighted.
          </td>
        </tr>
      </table>
      <p className='title'><b>Notes</b></p>
      <p>To close the notes click on X in the top right. To view the notes right-click on the highlighted text (anything you write in Notes will be deleted at the end of the test).</p>
      <img src={ScreenNotes}  height='317' alt='ScreenNotes' />
      <p>You can locate those areas of highlighted text containing notes by hovering over each highlighted text. If a small orange box appears the highlighted text contains notes.</p>
      <img src={ScreenNotesIcon} height='66' alt='ScreenNotesIcon' />
      <p>To clear your highlighting right click on the highlighted text.</p>
      <img src={ScreenRightClickHighlight} height='110' alt='ScreenRightClickHighlight' />
      <table>
        <tr>
          <td className='icon'>
            <img src={ScreenRightClear} height='21' alt='ScreenRightClear' />
          </td>
          <td style={{ paddingLeft: '50px' }}>
            Click to clear the highlighting. This will also clear any notes you have made.
          </td>
        </tr>
        <tr>
          <td className='icon'>
            <img src={ScreenRightClearAll} height='21' alt='ScreenRightNotes' />
          </td>
          <td style={{ paddingLeft: '50px' }}>
            Click to clear all highlighting including notes.
          </td>
        </tr>
      </table>
      <br /><br />
    </div>
  );
}

export default TestHelp;
