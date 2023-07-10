import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import MultiChoices from './MultiChoices';
import MultiInputs from './MultiInputs';
import DropContents from './DropContents';
import MultiInputInPra from './MultiInputInPra';
import MultiInputsInImage from './MultiInputsInImage';
import TextArea from './TextArea';
import TableInputs from './TableInputs';

class Answers extends Component {
    renderAnswerContent() {
        if (this.props.answers.type === 'radios') {
            return (
                <MultiChoices
                    key="1"
                    content={this.props.answers.content}
                    toggleQuestion={this.props.toggleQuestion}
                    chosenQuestionId={this.props.chosenQuestion}
                    checkAnsweredQuestion={this.props.checkAnsweredQuestion}
                    answerType="one answer"
                    storeAnswers={this.props.storeAnswers}
                    storedAnswers={this.props.storedAnswers}
                    addUserAnswer={this.props.addUserAnswer}
                />
            );
        } else if (this.props.answers.type === 'checkboxes') {
            return (
                <MultiChoices
                    key="2"
                    content={this.props.answers.content}
                    toggleQuestion={this.props.toggleQuestion}
                    chosenQuestionId={this.props.chosenQuestion}
                    checkAnsweredQuestion={this.props.checkAnsweredQuestion}
                    answerType="three answers"
                    storeAnswers={this.props.storeAnswers}
                    storedAnswers={this.props.storedAnswers}
                    addUserAnswer={this.props.addUserAnswer}
                />
            );
        } else if (this.props.answers.type === 'inputTexts in paragraphs') {
            return (
                <MultiInputs
                    key={this.props.answers.className}
                    content={this.props.answers.content}
                    number={this.props.answers.number}
                    className={this.props.answers.className}
                    toggleQuestion={this.props.toggleQuestion}
                    chosenQuestionId={this.props.chosenQuestion}
                    checkAnsweredQuestion={this.props.checkAnsweredQuestion}
                    storeAnswers={this.props.storeAnswers}
                    storedAnswers={this.props.storedAnswers}
                    addUserAnswer={this.props.addUserAnswer}
                />
            );
        } else if (this.props.answers.type === 'dragNDrop') {
            return (
                <DropContents
                    content={this.props.answers.content}
                    number={this.props.answers.number}
                    className={this.props.answers.className}
                    toggleQuestion={this.props.toggleQuestion}
                    chosenQuestionId={this.props.chosenQuestion}
                    checkAnsweredQuestion={this.props.checkAnsweredQuestion}
                    dragItems={this.props.answers.dragItems}
                    generateReplacedText={this.props.generateReplacedText}
                    replacedText={this.props.replacedText}
                    storeAnswers={this.props.storeAnswers}
                    storedAnswers={this.props.storedAnswers}
                    addUserAnswer={this.props.addUserAnswer}
                />
            );
        } else if (this.props.answers.type === 'inputTexts in one paragraph') {
            return (
                <MultiInputInPra
                    content={this.props.answers.content}
                    number={this.props.answers.number}
                    className={this.props.answers.className}
                    toggleQuestion={this.props.toggleQuestion}
                    chosenQuestionId={this.props.chosenQuestion}
                    checkAnsweredQuestion={this.props.checkAnsweredQuestion}
                    storeAnswers={this.props.storeAnswers}
                    storedAnswers={this.props.storedAnswers}
                    addUserAnswer={this.props.addUserAnswer}
                />
            );
        } else if (this.props.answers.type === 'inputTexts in an image') {
            return (
                <MultiInputsInImage
                    content={this.props.answers.content}
                    number={this.props.answers.number}
                    className={this.props.answers.className}
                    toggleQuestion={this.props.toggleQuestion}
                    chosenQuestionId={this.props.chosenQuestion}
                    checkAnsweredQuestion={this.props.checkAnsweredQuestion}
                    storeAnswers={this.props.storeAnswers}
                    storedAnswers={this.props.storedAnswers}
                    addUserAnswer={this.props.addUserAnswer}
                />
            );
        } else if (this.props.answers.type === 'writing') {
            return (
                <TextArea
                    content={this.props.answers.content}
                    checkAnsweredQuestion={this.props.checkAnsweredQuestion}
                    writingAnswerNote={this.props.writingAnswerNote}
                    updateAnwerPerPage={this.props.updateAnwerPerPage}
                    pageNumber={this.props.pageNumber}
                    storeAnswers={this.props.storeAnswers}
                    storedAnswers={this.props.storedAnswers}
                    addUserAnswer={this.props.addUserAnswer}
                />
            );
        } else if (this.props.answers.type === 'table inputs') {
            return (
                <div className={this.props.answers.className}>
                    <div className="image-container"></div>
                    <TableInputs
                        content={this.props.answers.content}
                        answersIndex={this.props.answers.answersIndex}
                        toggleQuestion={this.props.toggleQuestion}
                        chosenQuestionId={this.props.chosenQuestion}
                        checkAnsweredQuestion={this.props.checkAnsweredQuestion}
                        storeAnswers={this.props.storeAnswers}
                        storedAnswers={this.props.storedAnswers}
                        addUserAnswer={this.props.addUserAnswer}
                    />
                </div>
            );
        } else {
            return <div>{ReactHtmlParser(this.props.answers.content)}</div>;
        }
    }

    render() {
        const { question, description, title } = this.props.answers;
        return (
            <div>
                {question && <h4>{question}</h4>}
                {description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
                {title && <h3>{title}</h3>}
                {this.renderAnswerContent()}
            </div>
        );
    }
}

export default Answers;
