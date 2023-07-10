import React, { Component } from 'react';
import Information from './helpContents/Information';
import TestHelp from './helpContents/TestHelp';
import TaskHelp from './helpContents/TaskHelp';
import Button from '../Button';

class HelpButtonPopup extends Component {

  state = {
    pos3: 0,
    pos4: 0,
    dragEnable: false,
    showContentIndex: 2
  };

  onMouseDown (event) {
    this.setState({ pos3: event.clientX, pos4: event.clientY, dragEnable: true });
  }

  onMouseUp (event) {
    this.setState({ dragEnable: false });
  }

  onMouseMove (event) {
    const pos1 = this.state.pos3 - event.clientX;
    const pos2 = this.state.pos4 - event.clientY;
    this.setState({ pos3: event.clientX, pos4: event.clientY  });
    // set the element's new position:
    if (this.state.dragEnable) {
      this.moveTarget.style.top = (this.moveTarget.offsetTop - pos2) + "px";
      this.moveTarget.style.left = (this.moveTarget.offsetLeft - pos1) + "px";
    }
  }

  switchContent(index) {
    this.setState({ showContentIndex: index });
  }

  render() {
    const { pageNumber, toggleHelpPopup } = this.props;
    return (
      <div className='help-popup-container'>
        <div className="confirm-container"
          onMouseDown={(event) => this.onMouseDown(event)}
          onMouseMove={(event) => this.onMouseMove(event)}
          onMouseUp={(event) => this.onMouseUp(event)}
          ref={(node) => { this.moveTarget = node; }}
        >
          <h1>Help
            <button onClick={toggleHelpPopup} className="close"></button>
          </h1>
          <div className="content">
            <ul className='switch-content'>
              <li className={(this.state.showContentIndex === 0) ? 'active' : ''} onClick={() => this.switchContent(0)}>Information</li>
              <li className={(this.state.showContentIndex === 1) ? 'active' : ''} onClick={() => this.switchContent(1)}>Test help</li>
              <li className={(this.state.showContentIndex === 2) ? 'active' : ''} onClick={() => this.switchContent(2)}>Task help</li>
            </ul>
            { this.state.showContentIndex === 0 && <Information /> }
            { this.state.showContentIndex === 1 && <TestHelp /> }
            { this.state.showContentIndex === 2 && <TaskHelp pageNumber={pageNumber} /> }
            <Button btnText='OK' handleClick={toggleHelpPopup} />
          </div>
        </div>
      </div>
    );
  }
}

export default HelpButtonPopup;
