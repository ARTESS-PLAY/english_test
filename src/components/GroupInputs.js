import React, { Component } from 'react';

class GroupInputs extends Component {
    state = {
        answerChecked: [],
    };

    componentDidMount() {
        const storedAnswers = this.props.storedAnswers.filter(
            (answer) => answer.questionId === this.props.questionId,
        );
        if (storedAnswers.length > 0) {
            this.setState({ answerChecked: storedAnswers[0].answer });
        } else {
            const answerChecked = [];
            for (let i = 0; i < this.props.answers.length; i++) {
                answerChecked.push(false);
            }
            this.setState({ answerChecked });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.storedAnswers !== this.props.storedAnswers) {
            const storedAnswers = nextProps.storedAnswers.filter(
                (answer) => answer.questionId === this.props.questionId,
            );
            if (storedAnswers.length > 0) {
                this.setState({ answerChecked: storedAnswers[0].answer });
            }
        }

        if (nextProps.answers !== this.props.answers) {
            const answerChecked = [];
            for (let i = 0; i < this.props.answers.length; i++) {
                answerChecked.push(false);
            }
            this.setState({ answerChecked });
        }
    }

    handleChange(id) {
        const answerChecked = [...this.state.answerChecked];
        const checkedNumber = this.state.answerChecked.filter((x) => x === true);

        if (this.props.answerType === 'one answer') {
            for (let i = 0; i < this.state.answerChecked.length; i++) {
                answerChecked[i] = false;
            }
        }

        if (checkedNumber.length < 3) {
            answerChecked[id - 1] = !this.state.answerChecked[id - 1];
        } else {
            answerChecked[id - 1] = false;
        }

        if (this.props.answerType === 'one answer') {
            this.props.addUserAnswer(
                this.props.questionId,
                this.props.answers.find(
                    (el) => el.id === answerChecked.findIndex((value) => value) + 1,
                )?.content,
            );
        } else if (this.props.answerType === 'three answers') {
            this.props.addUserAnswer(
                this.props.questionId,
                this.props.answers
                    .map((el) => {
                        if (answerChecked[el.id - 1] === true) {
                            return el?.content;
                        }
                    })
                    .filter((el) => el),
            );
        }

        this.setState({ answerChecked }, () => {
            this.props.checkAnsweredQuestion(this.props.questionId, this.state.answerChecked);
            this.props.storeAnswers(this.props.questionId, this.state.answerChecked);
        });
    }

    render() {
        const { answers, answerType, questionId, toggleQuestion } = this.props;
        return (
            <ul className="answers" onClick={() => toggleQuestion(questionId)}>
                {answers.map((answer) => (
                    <li key={answer.id} onClick={() => this.handleChange(answer.id)}>
                        <input
                            type={answerType === 'one answer' ? 'radio' : 'checkbox'}
                            value={answer.content}
                            onChange={() => this.handleChange(answer.id)}
                            checked={this.state.answerChecked[answer.id - 1] ? true : false}
                        />
                        <p>{answer.content}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default GroupInputs;
