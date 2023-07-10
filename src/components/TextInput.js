import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.id,
        };
    }

    componentDidMount() {
        const storedAnswers = this.props.storedAnswers.filter(
            (answer) => answer.questionId === this.props.id,
        );
        if (storedAnswers.length > 0) {
            this.setState({ value: storedAnswers[0].answer });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            nextProps.chosenQuestionId !== this.props.chosenQuestionId &&
            this.props.id === nextProps.chosenQuestionId
        ) {
            this.nameInput.focus();
        }
    }

    handleChange = (event) => {
        if (this.props.addUserAnswer) {
            this.props.addUserAnswer(this.props.id, event.target.value);
        }

        this.setState({ value: event.target.value }, () => {
            if (this.state.value !== '') {
                this.props.checkAnsweredQuestion(this.props.id, [true]);
            } else {
                this.props.checkAnsweredQuestion(this.props.id, [false]);
            }
            this.props.storeAnswers(this.props.id, this.state.value);
        });
    };

    handleFocus = () => {
        if (this.state.value === this.props.id) {
            this.setState({ value: '' }, () => {
                this.props.toggleQuestion(this.props.id);
            });
        }
    };

    handleBlur = () => {
        if (this.state.value === '') {
            this.setState({ value: this.props.id });
        }
    };

    render() {
        return (
            <div className="text-input-container">
                <input
                    type="text"
                    spellCheck="false"
                    ref={(input) => {
                        this.nameInput = input;
                    }}
                    autoFocus={this.props.id === this.props.chosenQuestionId}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </div>
        );
    }
}

export default TextInput;
