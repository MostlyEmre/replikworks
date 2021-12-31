import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Question } from "./components/Question";
import "./style.css";
function App() {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scoreboard, setScoreboard] = useState(false);

  useEffect(() => {
    fetch("/quotes.json")
      .then((response) => response.json())
      .then((data) => setQuestions([...data.quotes]))
      .then(setLoading(false));
  }, []);

  if (loading) {
    return <p>yukleniyom</p>;
  }

  if (scoreboard) {
    return (
      <div>
        <h1>🦥 replikworks</h1>
        <p>
          Oyun bitti, skorun {score}/{questions.length}
        </p>
        <button onClick={() => window.location.reload(false)}>Yeniden basla.</button>
        <Footer />
      </div>
    );
  }
  if (questions.length !== 0) {
    return (
      <div className="App">
        <h1>🦥 replikworks</h1>
        <p>Skor: {score}</p>
        <Question
          questionNumber={questionNumber}
          setScore={setScore}
          setQuestionNumber={setQuestionNumber}
          score={score}
          questions={questions}
          loading={loading}
          setScoreboard={setScoreboard}
        />
        <Footer />
      </div>
    );
  }

  return <p>hello</p>;
}
export default App;
