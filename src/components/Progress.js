import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { points, index, numQuestions, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        type="range"
        min={0}
        max={numQuestions}
        value={index + Number(answer !== null)}
      />
      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
