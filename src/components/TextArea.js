import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.writingAnswerNote,
            wordCount: 0,
        };
    }

    componentWillReceiveProps(nextProps) {
        const words = nextProps.writingAnswerNote.split(/\s+/).filter((word) => word !== '');
        this.setState({ content: nextProps.writingAnswerNote, wordCount: words.length });
    }

    wordCounter() {
        const words = this.state.content.split(/\s+/).filter((word) => word !== '');
        this.setState({ wordCount: words.length }, () => {
            if (this.state.wordCount === 0) {
                this.props.checkAnsweredQuestion(this.props.pageNumber, [false]);
            } else {
                this.props.checkAnsweredQuestion(this.props.pageNumber, [true]);
            }
        });
    }

    handleChange(event) {
        if (this.props.addUserAnswer && this.props.content) {
            this.props.addUserAnswer(this.props.content[0].id, event.target.value);
        }

        this.setState({ content: event.target.value }, () => {
            this.wordCounter();
            this.props.updateAnwerPerPage(this.state.content, this.props.pageNumber);
        });
    }
    render() {
        return (
            <div className="text-area-container">
                <textarea onChange={this.handleChange} value={this.state.content}></textarea>
                <p>
                    Word Count: <span>{this.state.wordCount}</span>
                </p>
            </div>
        );
    }
}

export default TextArea;
