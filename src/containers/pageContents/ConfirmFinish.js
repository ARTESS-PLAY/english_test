import React, { useState } from 'react';
import Button from '../../components/Button';
import { compareWords } from '../../functions';

const ConfirmFinish = ({ handleClick, testEnd, setTestEnd, userAnsArr, calcResults }) => {
    const [showAns, setShowAns] = useState(false);

    const handleShowAns = () => {
        calcResults();
        setTestEnd();
        setShowAns((prev) => !prev);
    };

    return (
        <div className="confirm-finish-container">
            <h1>Test ended</h1>
            <div>
                <p>Your test has finished.</p>
                <p>All of your answers have been stored.</p>
                <p>Please wait for further instructions.</p>
                {!testEnd && <Button btnText="Review answers" handleClick={handleClick} />}
                <Button btnText="Show answers" handleClick={handleShowAns} />
            </div>
            {showAns && (
                <>
                    <div className="test_results">
                        {userAnsArr.map((el) => {
                            if (el.questionID == 28) {
                                return (
                                    <div key={el.questionID} className="test_results__item">
                                        <p className="test_results__item__title">
                                            Question <span>28-30</span>:{' '}
                                        </p>
                                        <p className="test_results__item__ans">
                                            Correct answers -{' '}
                                            <span>{el.correctAnswer.join(', ')}</span>
                                        </p>
                                        <p className="test_results__item__ans">
                                            Your answers -{' '}
                                            <span>
                                                {el.userAnswer.length
                                                    ? el.userAnswer.join(', ')
                                                    : 'empty'}
                                            </span>
                                        </p>
                                        <p className="test_results__item__status">
                                            Status:{' '}
                                            <span
                                                className={
                                                    el.result > 0
                                                        ? el.result >= 3
                                                            ? 'correct'
                                                            : 'half_correct'
                                                        : 'incorrect'
                                                }>
                                                {el.result} / 3
                                            </span>
                                        </p>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={el.questionID} className="test_results__item">
                                        <p className="test_results__item__title">
                                            Question <span>{el.questionID}</span>:{' '}
                                        </p>
                                        <p className="test_results__item__ans">
                                            Correct answer - <span>{el.correctAnswer}</span>
                                        </p>
                                        <p className="test_results__item__ans">
                                            Your answer -{' '}
                                            <span>
                                                {el.userAnswer && el.userAnswer != ''
                                                    ? el.userAnswer
                                                    : 'empty'}
                                            </span>
                                        </p>
                                        <p className="test_results__item__status">
                                            Status:{' '}
                                            <span
                                                className={el.result > 0 ? 'correct' : 'incorrect'}>
                                                {el.result > 0 ? 'correct' : 'incorrect'}
                                            </span>
                                        </p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="result__count">
                        Total result:
                        <span> {userAnsArr.reduce((sum, cur) => sum + cur.result, 0)} / 30</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default ConfirmFinish;
