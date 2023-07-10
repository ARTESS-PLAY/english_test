import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import DropBoxEmpty from './DropBoxEmpty';
import DropBoxFull from './DropBoxFull';

class DropContents extends Component {
    render() {
        const {
            content,
            className,
            toggleQuestion,
            chosenQuestionId,
            checkAnsweredQuestion,
            dragItems,
            generateReplacedText,
            replacedText,
            storeAnswers,
            storedAnswers,
            addUserAnswer,
        } = this.props;

        return (
            <div className={`drop-content-container ${className}`}>
                {className === 'drop-content-inline' && <h5>The importance of language</h5>}
                {content.length > 0 &&
                    content.map((p) => (
                        <p key={p.id}>
                            {ReactHtmlParser(p.answers)}
                            <DropBoxEmpty
                                key={`${className}${p.id}`}
                                id={p.id}
                                toggleQuestion={toggleQuestion}
                                chosenQuestionId={chosenQuestionId}
                                checkAnsweredQuestion={checkAnsweredQuestion}
                                generateReplacedText={generateReplacedText}
                                storeAnswers={storeAnswers}
                                storedAnswers={storedAnswers}
                                addUserAnswer={addUserAnswer}
                            />
                        </p>
                    ))}
                {className === 'drop-content-inline' && (
                    <p> to use. However, its sophistication is often overlooked.</p>
                )}
                <DropBoxFull
                    key={dragItems[0]}
                    dragItems={dragItems}
                    replacedText={replacedText}
                    storedAnswers={storedAnswers}
                />
            </div>
        );
    }
}

export default DropContents;
