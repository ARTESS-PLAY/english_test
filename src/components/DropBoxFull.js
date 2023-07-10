import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import DndItemType from './DndItemType';
import DragBox from './DragBox';

const boxTarget = {
  drop(props, monitor) {
    return monitor.getItem();
  },
};

export class DropBoxFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movingOut: true,
      renderItems: props.dragItems,
      replacedText: '',
    }
  }

  componentDidMount() {
    const storedStringAnswers = this.props.storedAnswers.filter(answer => typeof answer.answer === 'string');
    let undraggedItems = this.props.dragItems;
    this.props.dragItems.forEach(item => {
      const isDragged = (storedStringAnswers.filter(answer => answer.answer === item)).length > 0;
      if (isDragged) {
        undraggedItems = undraggedItems.filter(i => i !== item);
      }
    });

    this.setState({ renderItems: undraggedItems });
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.dragItems !== this.props.dragItems) {
      this.setState({ renderItems: nextProps.dragItems });
    }

    if (nextProps.isOver !== this.props.isOver && !nextProps.didDrop) {
      if (nextProps.isOver) {
        this.setState({ movingOut: false });
      } else {
        this.setState({ movingOut: true });
      }
    }

    if (nextProps.replacedText !== this.props.replacedText) {
      this.setState({ replacedText: nextProps.replacedText }, () => {
        if (this.state.replacedText !== '') {
          const renderItems = [...this.state.renderItems, this.props.replacedText];
          this.setState({ renderItems });
        }
      });
    }

    if (nextProps.didDrop !== this.props.didDrop && nextProps.didDrop) {
      let renderItems, itemExist;
      if (this.state.movingOut) {
        renderItems = this.state.renderItems.filter(item => item !== this.props.item.text);

        this.setState({ renderItems }, () => {
          const itemExistReplace = this.state.renderItems.filter(item => item === this.props.replacedText);
          if (itemExistReplace.length === 0 && this.state.replacedText !== '') {
            const renderItems = [...this.state.renderItems, this.props.replacedText];
            this.setState({ renderItems });
          }
        });
      } else {
        itemExist = this.state.renderItems.filter(item => item === this.props.item.text);
        if (itemExist.length === 0) {
          renderItems = [...this.state.renderItems, this.props.item.text];
          this.setState({ renderItems });
        }
      }
    }
  }

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className='drag-source-container'>
        {this.state.renderItems.map((item) => <DragBox key={item} text={item} /> )}
      </div>
    );
  }
}

export default DropTarget(DndItemType.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  item: monitor.getItem(),
  itemresult:monitor.getDropResult(),
  didDrop:monitor.didDrop()
}))(DropBoxFull);
