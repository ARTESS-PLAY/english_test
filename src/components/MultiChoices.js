import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import GroupInputs from './GroupInputs';

class MultiChoices extends Component {
    render() {
        const {
            content,
            toggleQuestion,
            chosenQuestionId,
            answerType,
            checkAnsweredQuestion,
            storeAnswers,
            storedAnswers,
            addUserAnswer,
        } = this.props;

        return (
            <div className="multiple-choice-container">
                {content.map((question) => (
                    <div
                        key={question.id}
                        className={chosenQuestionId === question.id ? 'chosen' : ''}>
                        <div className="question">{ReactHtmlParser(question.question)}</div>
                        <GroupInputs
                            answers={question.answers}
                            answerType={answerType}
                            questionId={question.id}
                            checkAnsweredQuestion={checkAnsweredQuestion}
                            toggleQuestion={toggleQuestion}
                            storeAnswers={storeAnswers}
                            storedAnswers={storedAnswers}
                            addUserAnswer={addUserAnswer}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default MultiChoices;
