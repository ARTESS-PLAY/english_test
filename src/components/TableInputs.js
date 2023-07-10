import React, { Component } from 'react';

class TableInputs extends Component {
    state = {
        activeTrId: 0,
        activeTdId: [],
        focusTdId: 0,
    };

    componentWillMount() {
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentDidMount() {
        const initialValues = [];
        this.props.content.forEach((item) => {
            const storedAnswer = this.props.storedAnswers.filter(
                (answer) => answer.questionId === item.id,
            );
            if (storedAnswer.length > 0) {
                initialValues[item.id - 1] = storedAnswer[0].answer;
            } else {
                initialValues[item.id - 1] = 0;
            }
        });

        this.setState({ activeTdId: initialValues });
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.chosenQuestionId !== this.state.activeTrId) {
            this.updateFocusTd(0);
        }
    }

    handleOutsideClick = (event) => {
        if (this.node.contains(event.target)) {
            return;
        }

        if (
            event.target.classList.contains('next') ||
            event.target.classList.contains('previous') ||
            event.target.classList.contains('for-detect-table-click')
        ) {
            return;
        }

        this.updateFocusTd(false);
    };

    updateFocusTd(id) {
        this.setState({ focusTdId: id });
    }

    updateActiveTr(trId) {
        this.setState({ activeTrId: trId }, () => {
            this.props.toggleQuestion(this.state.activeTrId);
        });
    }

    updateActiveTd(tdId, trId) {
        const activeIdCurrentTR = this.state.activeTdId[trId - 1] === tdId ? 0 : tdId;
        const activeTdId = this.state.activeTdId;
        activeTdId[trId - 1] = activeIdCurrentTR;

        const letter = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'[tdId - 1];
        this.props.addUserAnswer(trId, letter);

        this.setState({ activeTdId }, () => {
            const answered = this.state.activeTdId[trId - 1] === 0 ? [false] : [true];
            this.props.checkAnsweredQuestion(this.state.activeTrId, answered);
            this.props.storeAnswers(this.state.activeTrId, this.state.activeTdId[trId - 1]);
        });
    }

    renderThead() {
        return (
            <tr>
                <th onClick={() => this.updateFocusTd(false)}> </th>
                {this.props.answersIndex.map((answer, index) => (
                    <th onClick={() => this.updateFocusTd(index)} key={index}>
                        {answer}
                    </th>
                ))}
            </tr>
        );
    }

    renderTbody() {
        return (
            <tbody>
                {this.props.content.map((tr) => (
                    <tr
                        key={tr.id}
                        onClick={() => this.updateActiveTr(tr.id)}
                        className={this.props.chosenQuestionId === tr.id ? 'active' : ''}>
                        <td onClick={() => this.updateFocusTd(0)}>
                            <b>{tr.id}</b>
                            {tr.answers}
                        </td>
                        {this.props.answersIndex.map((answer, index) => (
                            <td
                                key={index}
                                onClick={() => {
                                    this.updateActiveTd(index + 1, tr.id);
                                    this.updateFocusTd(index);
                                }}
                                className={`${
                                    this.state.activeTdId[tr.id - 1] === index + 1 ? 'active' : ''
                                } ${this.state.focusTdId === index ? 'focus' : ''}`}>
                                {' '}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        );
    }

    render() {
        return (
            <div className="table-inputs-container">
                <table ref={(node) => (this.node = node)}>
                    <thead>{this.renderThead()}</thead>
                    {this.renderTbody()}
                </table>
            </div>
        );
    }
}

export default TableInputs;
