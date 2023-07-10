import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import DndItemType from './DndItemType';

const boxSource = {
  beginDrag(props) {
    return {text: props.text}
  }
};

export class DragBox extends Component {
  render() {
  const { connectDragSource, text } = this.props;
    return connectDragSource (
      <span className='drag-item'
      >{text}</span>
    );
  }
}

export default DragSource(DndItemType.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(DragBox);
