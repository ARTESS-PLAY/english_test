import React, { Component } from 'react';
import IELTSListeningGapFill from '../../../assets/images/popups/taskhelp/IELTS-Listening-GapFill.png';
import IELTSListeningDragDrop1 from '../../../assets/images/popups/taskhelp/IELTS-Listening-DragDrop1.png';
import IELTSListeningDragDrop2 from '../../../assets/images/popups/taskhelp/IELTS-Listening-DragDrop2.png';
import IELTSListeningChoice from '../../../assets/images/popups/taskhelp/IELTS-Listening-Choice.png';
import IELTSListeningMultiChoice from '../../../assets/images/popups/taskhelp/IELTS-Listening-MultiChoice.png';
import IELTSListeningTableMatch from '../../../assets/images/popups/taskhelp/IELTS-Listening-TableMatch.png';

class TaskHelp extends Component {
  componentDidMount() {
    if (this.props.pageNumber) {
      const targetId =  this.generateTarget(this.props.pageNumber);
      const el = document.getElementById(targetId);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pageNumber !== this.props.pageNumber) {
      const targetId =  this.generateTarget(this.props.pageNumber);
      const el = document.getElementById(targetId);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  generateTarget(pageNumber) {
    let targetId;
    if (pageNumber === 1) {
      targetId = 'task-help-1';
    } else if (pageNumber === 2) {
      targetId = 'task-help-2';
    } else if (pageNumber === 3) {
      targetId = 'task-help-3';
    } else if (pageNumber === 4) {
      targetId = 'task-help-4';
    } else if (pageNumber === 5 || pageNumber === 6 || pageNumber === 7 || pageNumber === 8) {
      targetId = 'task-help-5';
    }

    return targetId;
  }

  render() {
    return (
      <div className='task-help-container'>
        <p>To choose a question either click on the question number at the bottom of the screen or click on the question.</p>
        <p id='task-help-5' className='title'><b>Gap fill questions</b></p>
        <p>To answer some questions, you need to write words or numbers in a gap. To answer these questions, click in the gap and write your answer. Some questions may ask you to write your answer in a table, flow-chart or diagram.</p>
        <img src={IELTSListeningGapFill} height='380' alt='IELTS Listening GapFill' />
        <p id='task-help-3' className='title'><b>Drag and drop questions</b></p>
        <p>To answer a question, click on the answer on the right</p>
        <img src={IELTSListeningDragDrop1} height='332' alt='IELTS Listening DragDrop1' />
        <p>and move it into the gap on the left.</p>
        <img src={IELTSListeningDragDrop2} height='296' alt='IELTS Listening DragDrop2' />
        <p>If you want to change your answer, move another answer into the gap.</p>
        <p>If you want to leave the question unanswered, move the answer back.</p>
        <p>Don&#39;t forget! You may need to scroll to see all the questions and answers.</p>
        <p id='task-help-1' className='title'><b>Multiple choice questions</b></p>
        <p>Click on the answer you think is right.</p>
        <p>If you change your mind, click on a different answer.</p>
        <p>If you want to leave the question unanswered, click on your answer again.</p>
        <img src={IELTSListeningChoice} height='166' alt='IELTS Listening Choice' />
        <p id='task-help-2' className='title'><b>Multiple choice questions where there is more than one answer</b></p>
        <p>Some questions may ask you to choose two or three answers. Make sure you read the instructions and questions carefully.</p>
        <img src={IELTSListeningMultiChoice} height='209' alt='IELTS Listening MultiChoice' />
        <p>Click on the answers you think are right.</p>
        <p>If you change your mind, click on a different answer.</p>
        <p>If you want to leave the question unanswered, click on your answer again.</p>
        <p id='task-help-4' className='title'><b>Matching questions using a table</b></p>
        <p>To choose a question, click on the question number in the table. The row will become shaded.</p>
        <img src={IELTSListeningTableMatch} height='188' alt='IELTS Listening Table Match' />
        <p>Choose the correct answer by clicking on the space in the table. A tick will appear.</p>
        <p>If you want to change your answer, click on another space.</p>
        <p>If you want to leave the question unanswered, click on the space again.</p>
        <p>Sometimes you may choose an answer more than once. Make sure you read the instructions and questions carefully.</p>
        <br/><br/>
      </div>
    )
  }
}

export default TaskHelp;
