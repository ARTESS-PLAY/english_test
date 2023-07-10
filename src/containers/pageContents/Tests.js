import React, { Component } from 'react';
import Answers from '../../components/Answers';
import DropQuestion from './DropQuestion';

class Tests extends Component {
    state = {
        chosenQuestion: 1,
        answeredQuestion: [],
        reviewChecked: false,
        reviewModeNode: [],
        summaryView: false,
        chooseQForCheckbox: 4,
        replacedText: '',
        storedAnswers: [],
    };

    componentDidMount() {
        this.setState({
            answeredQuestion: this.props.answeredQuestion,
            storedAnswers: this.props.storedAnswers,
            reviewModeNode: this.props.reviewModeNode,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.testPageNumber !== this.props.testPageNumber) {
            this.setState({ replacedText: '', reviewChecked: false });
        }
    }

    generateReplacedText = (text) => {
        this.setState({ replacedText: text });
    };

    toggleQuestion = (chosenId, page) => {
        if (page !== this.props.testPageNumber) {
            this.props.TestsPageJump(page + 3);
        }
        if (this.props.testPageNumber === 8) {
            this.setState({ chosenQuestion: chosenId });
        } else {
            this.setState({ chosenQuestion: chosenId });
        }
    };

    checkAnsweredQuestion = (questionId, answersStatus) => {
        let answeredQuestion = [...this.state.answeredQuestion],
            chooseQForCheckbox;
        const questionAnswered = answersStatus.filter((checked) => checked === true);

        if (this.props.testPageNumber === 8) {
            if (questionId === 28) {
                if (questionAnswered.length === 0) {
                    answeredQuestion[27] = false;
                    answeredQuestion[28] = false;
                    answeredQuestion[29] = false;
                    chooseQForCheckbox = 28;
                } else if (questionAnswered.length === 1) {
                    answeredQuestion[27] = true;
                    answeredQuestion[28] = false;
                    answeredQuestion[29] = false;
                    chooseQForCheckbox =
                        this.state.chooseQForCheckbox > 28 ? this.state.chooseQForCheckbox : 28;
                } else if (questionAnswered.length === 2) {
                    answeredQuestion[27] = true;
                    answeredQuestion[28] = true;
                    answeredQuestion[29] = false;
                    chooseQForCheckbox =
                        this.state.chooseQForCheckbox > 29 ? this.state.chooseQForCheckbox : 29;
                } else if (questionAnswered.length === 3) {
                    answeredQuestion[27] = true;
                    answeredQuestion[28] = true;
                    answeredQuestion[29] = true;
                    chooseQForCheckbox = 30;
                }
            }
        } else {
            if (questionAnswered.length === 0) {
                answeredQuestion[questionId - 1] = false;
            } else {
                answeredQuestion[questionId - 1] = true;
            }

            if (this.props.testPageNumber > 8) {
                chooseQForCheckbox = 30;
            } else {
                chooseQForCheckbox = 28;
            }
        }
        this.setState({ answeredQuestion, chooseQForCheckbox });
    };

    renderReviewNode = () => {
        const reviewModeNode = [...this.state.reviewModeNode];
        if (this.props.testPageNumber === 8) {
            this.setState({ reviewChecked: !this.state.reviewChecked }, () => {
                if (this.state.reviewChecked) {
                    reviewModeNode[this.state.chooseQForCheckbox - 1] = true;
                } else {
                    reviewModeNode[this.state.chooseQForCheckbox - 1] = false;
                }

                this.setState({ reviewModeNode });
            });
        } else {
            this.setState({ reviewChecked: !this.state.reviewChecked }, () => {
                if (this.state.reviewChecked) {
                    reviewModeNode[this.state.chosenQuestion - 1] = true;
                } else {
                    reviewModeNode[this.state.chosenQuestion - 1] = false;
                }

                this.setState({ reviewModeNode });
            });
        }
    };

    unCheckReviewLiClick = (questionId) => {
        if (!this.state.reviewModeNode[questionId - 1]) {
            this.setState({ reviewChecked: false });
        }
    };

    handleNextClick = () => {
        if (this.props.testPageNumber === 2) {
            this.setState({ chooseQForCheckbox: this.state.chooseQForCheckbox + 1 }, () => {
                if (this.state.chooseQForCheckbox > 6) {
                    this.props.renderNextPage();
                    this.setState({ chosenQuestion: 7, chooseQForCheckbox: 6 });
                }
            });
        } else {
            this.setState({ chosenQuestion: this.state.chosenQuestion + 1 }, () => {
                if (
                    this.state.chosenQuestion >
                    this.props.test.answer.content[0].id + this.props.test.answer.number - 1
                ) {
                    if (this.props.testPageNumber === 6) {
                        this.props.storeAnswersWhenTestUnmount(
                            this.state.answeredQuestion,
                            this.state.storedAnswers,
                            this.state.reviewModeNode,
                        );
                    }
                    this.props.renderNextPage();
                }
            });
        }
    };

    handlePreviousClick = () => {
        if (this.props.testPageNumber === 2) {
            this.setState({ chooseQForCheckbox: this.state.chooseQForCheckbox - 1 }, () => {
                this.setState({ chosenQuestion: 4 });
                if (this.state.chooseQForCheckbox < 4) {
                    this.props.renderPreviousPage();
                    this.setState({ chosenQuestion: 3, chooseQForCheckbox: 4 });
                }
            });
        } else {
            this.setState({ chosenQuestion: this.state.chosenQuestion - 1 }, () => {
                if (this.state.chosenQuestion < this.props.test.answer.content[0].id) {
                    this.props.renderPreviousPage();
                }
            });
        }
    };

    storeAnswers = (questionId, answer) => {
        let storedAnswers = this.state.storedAnswers.filter(
            (answer) => answer.questionId !== questionId,
        );
        storedAnswers = [...storedAnswers, { questionId: questionId, answer: answer }];
        this.setState({ storedAnswers });
    };

    renderNavAnswers(page, test) {
        if (page === 8) {
            const qArray = [28, 29, 30];
            return qArray.map((q) => (
                <li
                    key={q}
                    className={`${
                        this.state.chooseQForCheckbox === q && this.props.testPageNumber === 8
                            ? 'current'
                            : ''
                    } ${this.state.reviewModeNode[q - 1] ? 'review' : ''} ${
                        this.state.answeredQuestion[q - 1] ? 'answered' : ''
                    }`}
                    onClick={() => {
                        this.setState({ chooseQForCheckbox: q });
                        this.toggleQuestion(28, page);
                        this.unCheckReviewLiClick(q);
                    }}>
                    <span className="question-number">{q}</span>
                    <div className="hover-message">Question {q}</div>
                    <span className="arrow-down"></span>
                </li>
            ));
        } else {
            return test.answer.content.map((question) => (
                <li
                    key={question.id}
                    className={`for-detect-table-click ${
                        this.state.chosenQuestion === question.id ? 'current' : ''
                    } ${this.state.reviewModeNode[question.id - 1] ? 'review' : ''} ${
                        this.state.answeredQuestion[question.id - 1] ? 'answered' : ''
                    }`}
                    onClick={() => {
                        this.toggleQuestion(question.id, page);
                        this.unCheckReviewLiClick(question.id);
                    }}>
                    <span className="question-number for-detect-table-click">{question.id}</span>
                    <div className="hover-message">Question {question.id}</div>
                    <span className="arrow-down"></span>
                </li>
            ));
        }
    }

    renderAllNavAnswers() {
        return <ul>{this.props.tests.map((test) => this.renderNavAnswers(test.page, test))}</ul>;
    }

    renderQuestions() {
        if (this.props.test.question.type === 'drop target') {
            return (
                <DropQuestion
                    questions={this.props.test.question.content}
                    className={this.props.test.question.className}
                    chosenQuestion={this.state.chosenQuestion}
                    toggleQuestion={this.toggleQuestion}
                    checkAnsweredQuestion={this.checkAnsweredQuestion}
                    generateReplacedText={this.generateReplacedText}
                    storeAnswers={this.storeAnswers}
                    storedAnswers={this.state.storedAnswers}
                />
            );
        } else {
            return (
                <div dangerouslySetInnerHTML={{ __html: this.props.test.question.content }}></div>
            );
        }
    }

    render() {
        const { test } = this.props;
        return (
            <div className="test-container">
                <div className="title" dangerouslySetInnerHTML={{ __html: test.title }}></div>
                <div
                    className={`content ${
                        test.answer.className ? test.answer.className : ''
                    } listening-test`}>
                    {test.question && (
                        <div className="question">
                            <h2>{test.question.title}</h2>
                            {this.renderQuestions()}
                        </div>
                    )}
                    <div className="answer">
                        <Answers
                            answers={test.answer}
                            chosenQuestion={this.state.chosenQuestion}
                            toggleQuestion={this.toggleQuestion}
                            checkAnsweredQuestion={this.checkAnsweredQuestion}
                            generateReplacedText={this.generateReplacedText}
                            replacedText={this.state.replacedText}
                            storeAnswers={this.storeAnswers}
                            storedAnswers={this.state.storedAnswers}
                            addUserAnswer={this.props.addUserAnswer}
                        />
                    </div>
                </div>
                <div className="footer-nav">
                    <div>
                        <input
                            type="checkbox"
                            checked={this.state.reviewChecked}
                            onChange={this.renderReviewNode}
                        />
                        <label>Review</label>
                    </div>
                    <div className={`question-nav ${this.state.summaryView ? 'summary-view' : ''}`}>
                        {this.renderAllNavAnswers()}
                        <button
                            onClick={() =>
                                this.setState({ summaryView: !this.state.summaryView })
                            }></button>
                    </div>
                    {!(this.props.testPageNumber === 1 && this.state.chosenQuestion === 1) && (
                        <button className="previous" onClick={this.handlePreviousClick}></button>
                    )}
                    <button className="next" onClick={this.handleNextClick}></button>
                </div>
            </div>
        );
    }
}

export default Tests;
