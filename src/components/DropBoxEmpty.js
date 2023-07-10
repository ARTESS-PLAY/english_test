import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import DndItemType from './DndItemType';
import DragBox from './DragBox';

export class DropBoxEmpty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            HoveringInText: '',
        };
    }

    componentDidMount() {
        const storedAnswers = this.props.storedAnswers.filter(
            (answer) => answer.questionId === this.props.id,
        );
        if (storedAnswers.length > 0) {
            this.setState({ text: storedAnswers[0].answer });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOver !== this.props.isOver && !nextProps.didDrop) {
            if (nextProps.isOver) {
                this.setState({ HoveringInText: this.props.item.text });
            } else {
                this.setState({ HoveringInText: '' });
            }
        }

        if (nextProps.item !== this.props.item) {
            this.setState({ HoveringInText: '' });
        }

        if (nextProps.didDrop !== this.props.didDrop && nextProps.didDrop) {
            if (this.state.HoveringInText !== this.state.text && this.state.HoveringInText !== '') {
                if (this.state.text !== '') {
                    this.props.generateReplacedText(this.state.text);
                } else {
                    this.props.generateReplacedText('');
                }
                this.props.toggleQuestion(this.props.id);
                this.props.checkAnsweredQuestion(this.props.id, [true]);
                this.setState({ text: this.state.HoveringInText }, () => {
                    this.props.storeAnswers(this.props.id, this.state.text);
                });
                if (this.props.addUserAnswer) {
                    this.props.addUserAnswer(this.props.id, this.state.HoveringInText);
                }
            } else if (this.state.text === this.props.item.text) {
                this.props.checkAnsweredQuestion(this.props.id, [false]);
                this.setState({ text: '' }, () => {
                    this.props.storeAnswers(this.props.id, this.state.text);
                });
                if (this.props.addUserAnswer) {
                    this.props.addUserAnswer(this.props.id, this.state.HoveringInText);
                }
            }
        }
    }

    renderText() {
        if (this.state.text !== '') {
            return <DragBox text={this.state.text} />;
        } else {
            return this.props.id;
        }
    }

    render() {
        const { isOver, connectDropTarget } = this.props;

        return connectDropTarget(
            <span
                className={`empty-drop-box ${this.state.text !== '' ? 'dropped' : ''} ${
                    this.props.chosenQuestionId === this.props.id ? 'chosen' : ''
                }`}
                style={{
                    border: isOver ? '1px dashed #000' : '1px solid #0370a7',
                    backgroundColor: isOver ? '#fffee5' : '#fff',
                }}
                onClick={() => this.props.toggleQuestion(this.props.id)}>
                {this.renderText()}
            </span>,
        );
    }
}

const boxTarget = {
    drop(props, monitor) {
        return monitor.getItem();
    },
};

export default DropTarget(DndItemType.BOX, boxTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    item: monitor.getItem(),
    itemresult: monitor.getDropResult(),
    didDrop: monitor.didDrop(),
}))(DropBoxEmpty);
