import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import DropBoxEmpty from '../../components/DropBoxEmpty';

const DropQuestion = ({ questions, className, toggleQuestion, chosenQuestion, checkAnsweredQuestion, generateReplacedText, storeAnswers, storedAnswers }) => {

  return (
    <div className={className}>
      { questions.map((question) =>
          <div key={question.id}>
            <DropBoxEmpty id={question.id}
              toggleQuestion={toggleQuestion}
              chosenQuestionId={chosenQuestion}
              checkAnsweredQuestion={checkAnsweredQuestion}
              generateReplacedText={generateReplacedText}
              storeAnswers={storeAnswers}
              storedAnswers={storedAnswers}
            />
            {ReactHtmlParser(question.question)}
          </div>
        )}
    </div>
  );
}

export default DropQuestion;
