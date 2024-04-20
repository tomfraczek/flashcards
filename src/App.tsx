import "./App.css";
import { useState } from "react";
import { QuestionTypes } from "./lib/questionsWithAnswers";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  // Stan przechowujący aktualne pytanie
  const [showAnswer, setShowAnswer] = useState(false);
  const questions = useSelector((state: RootState) => state.questions);
  const { questionsWithAnswers } = questions;

  const [currentQuestion, setCurrentQuestion] = useState<QuestionTypes>(
    getRandomQuestionFromArray(questionsWithAnswers)
  );

  // Funkcja do wybierania losowego pytania z tablicy
  function getRandomQuestionFromArray(array: QuestionTypes[]): QuestionTypes {
    const randomIndex: number = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  // Obsługa kliknięcia przycisku
  function handleButtonClick() {
    const randomQuestion: QuestionTypes =
      getRandomQuestionFromArray(questionsWithAnswers);
    setCurrentQuestion(randomQuestion);

    setShowAnswer(false);
  }

  return (
    <div className="appContainer">
      <div className="middle">
        <h1>{currentQuestion.question}</h1>
        {showAnswer && <p>{currentQuestion.answer}</p>}
        <div>
          {!showAnswer && (
            <button
              onClick={() => setShowAnswer(true)}
              style={{ border: "1px solid black" }}
            >
              Pokaż odpowiedź
            </button>
          )}
          <button
            onClick={handleButtonClick}
            style={{ border: "1px solid black" }}
          >
            Losuj kolejne pytanie
          </button>
        </div>
      </div>
      <div className="sidebar">
        <h3>History</h3>
      </div>
    </div>
  );
}

export default App;
