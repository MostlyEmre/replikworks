import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Answer = ({ setQuestionNumber, questionNumber, setScore, score, correctAnswer, questions, setScoreboard }) => {
  const sloths = ["Lousyd", "Aemrod", "F5uck", "Mazaai", "Margy", "Semkan", "Soybenny", "Xmailon"];
  const questionCount = questions.length;
  const handleClick = (e) => {
    // check if the answer is true
    // if true increase the score by 1
    // increase the question number by 1
    // present the next question
    e.preventDefault();

    if (e.target.innerText === questions[questionNumber - 1].author) {
      setScore(score + 1);
    }

    if (questionNumber <= questionCount - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setScoreboard(true);
    }
  };

  return (
    <div>
      {sloths.map((sloth) => {
        return (
          <button key={uuidv4()} className="button-wrapper" onClick={handleClick}>
            {sloth}
          </button>
        );
      })}
    </div>
  );
};
