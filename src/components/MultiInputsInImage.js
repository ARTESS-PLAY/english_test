import React from 'react';
import TextInput from './TextInput';

const MultiInputsInImage = ({
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
                <TextInput
                    key={p.id}
                    id={p.id}
                    toggleQuestion={toggleQuestion}
                    chosenQuestionId={chosenQuestionId}
                    checkAnsweredQuestion={checkAnsweredQuestion}
                    storeAnswers={storeAnswers}
                    storedAnswers={storedAnswers}
                    addUserAnswer={addUserAnswer}
                />
            ))}
        </div>
    );
};

export default MultiInputsInImage;
