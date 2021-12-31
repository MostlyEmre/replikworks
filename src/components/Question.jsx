import React from "react";
import { Answer } from "./Answer";

export const Question = ({ setQuestionNumber, questionNumber, setScore, score, questions, loading, setScoreboard }) => {
  if (loading) {
    <p>loading</p>;
  } else {
    return (
      <div>
        <p>"{questions[questionNumber - 1].quote}"</p>
        {/* <p>{questions[questionNumber]}</p> */}
        <Answer
          setQuestionNumber={setQuestionNumber}
          score={score}
          setScore={setScore}
          questionNumber={questionNumber}
          questions={questions}
          setScoreboard={setScoreboard}
        />
      </div>
    );
  }
};
