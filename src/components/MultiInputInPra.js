import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import TextInput from './TextInput';

const MultiInputInPra = ({
    className,
    content,
    toggleQuestion,
    chosenQuestionId,
    checkAnsweredQuestion,
    storeAnswers,
    storedAnswers,
    addUserAnswer,
}) => {
    return (
        <div className={`multiple-inputs-container ${className}`}>
            {content.map((p) => (
                <span key={p.id}>
                    {ReactHtmlParser(p.answers[0])}
                    <TextInput
                        id={p.id}
                        toggleQuestion={toggleQuestion}
                        chosenQuestionId={chosenQuestionId}
                        checkAnsweredQuestion={checkAnsweredQuestion}
                        storeAnswers={storeAnswers}
                        storedAnswers={storedAnswers}
                        addUserAnswer={addUserAnswer}
                    />
                    {ReactHtmlParser(p.answers[1])}
                </span>
            ))}
        </div>
    );
};

export default MultiInputInPra;
