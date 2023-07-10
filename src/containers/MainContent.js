import React, { Component } from 'react';
import ConfirmDetails from './pageContents/ConfirmDetails';
import Introductions from './pageContents/Introductions';
import TestSound from './pageContents/TestSound';
import Tests from './pageContents/Tests';
import ConfirmFinish from './pageContents/ConfirmFinish';
import { INTROS } from '../assets/content/intros';
import { TESTS } from '../assets/content/tests';
import HighlightNotes from '../components/staticComponents/HighlightNotes';
import { clearWord, compareWords } from '../functions';

const userAnsArr = TESTS.map((el) => {
    return el.answer.content.map((question) => {
        return {
            questionID: question.id,
            correctAnswer: question.correctAnswer,
            userAnswer: '',
            result: 0,
        };
    });
}).flat();

class MainContent extends Component {
    state = {
        answeredQuestion: [],
        storedAnswers: [],
        reviewModeNode: [],
        userAnsArr: userAnsArr,
    };

    storeAnswersWhenTestUnmount = (answeredQuestion, storedAnswers, reviewModeNode) => {
        this.setState({ answeredQuestion, storedAnswers, reviewModeNode });
    };

    addUserAnswer = (questionId, userAnswer) => {
        const tmp = this.state.userAnsArr.map((el) =>
            el.questionID === questionId ? Object.assign({}, el, { userAnswer: userAnswer }) : el,
        );

        this.setState({
            userAnsArr: tmp,
        });
    };

    calcResults = () => {
        const tmp = this.state.userAnsArr.map((el) => {
            let res = 0;
            if (el.questionID === 28) {
                const tmpClearCorrectAnswer = el.correctAnswer.map((w) => clearWord(w));

                if (el.userAnswer.length > 0) {
                    el.userAnswer.map((w) => {
                        w = clearWord(w);
                        if (tmpClearCorrectAnswer.find((wf) => wf === w)) {
                            res += 1;
                        }
                    });
                }
            } else {
                if (compareWords(el.userAnswer, el.correctAnswer)) {
                    res += 1;
                }
            }

            return Object.assign({}, el, { result: res });
        });
        this.setState({ userAnsArr: tmp });
    };

    renderPageContent() {
        if (this.props.pageType === 'Intro') {
            switch (this.props.pageNumber) {
                case 1:
                    return <ConfirmDetails handleClick={this.props.renderNextPage} />;
                case 2:
                    return (
                        <TestSound
                            handleClick={this.props.renderNextPage}
                            updatePlayTestSound={this.props.updatePlayTestSound}
                            testSoundBtn={this.props.testSoundBtn}
                        />
                    );
                case 3:
                    return (
                        <Introductions
                            introductions={
                                INTROS.filter((intro) => intro.pageType === 'reading')[0]
                            }
                            handleClick={this.props.renderNextPage}
                        />
                    );
                default:
                    return null;
            }
        } else if (this.props.pageType === 'Tests') {
            return (
                <Tests
                    test={TESTS[this.props.pageNumber - 4]}
                    tests={TESTS}
                    userAns={this.state.userAns}
                    renderNextPage={this.props.renderNextPage}
                    renderPreviousPage={this.props.renderPreviousPage}
                    testPageNumber={this.props.pageNumber - 3}
                    TestsPageJump={this.props.TestsPageJump}
                    storeAnswersWhenTestUnmount={this.storeAnswersWhenTestUnmount}
                    answeredQuestion={this.state.answeredQuestion}
                    storedAnswers={this.state.storedAnswers}
                    reviewModeNode={this.state.reviewModeNode}
                    addUserAnswer={this.addUserAnswer}
                />
            );
        } else {
            return (
                <ConfirmFinish
                    handleClick={this.props.startReviewAnswers}
                    testEnd={this.props.testEnd}
                    userAnsArr={this.state.userAnsArr}
                    calcResults={this.calcResults}
                    setTestEnd={this.props.setTestEnd}
                />
            );
        }
    }

    render() {
        return (
            <div
                className={`main-content-container ${
                    this.props.pageType === 'Tests' ? 'full-height' : ''
                }`}>
                {this.props.pageType === 'Tests' && (
                    <HighlightNotes testPageNumber={this.props.pageNumber - 4} />
                )}
                {this.renderPageContent()}
            </div>
        );
    }
}

export default MainContent;
