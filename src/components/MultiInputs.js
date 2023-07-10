import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import TextInput from './TextInput';

const MultiInputs = ({
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
                <ul key={p.id}>
                    <li>
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
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default MultiInputs;
