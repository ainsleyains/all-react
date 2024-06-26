import { useQuiz } from '../context/QuizContext';

export default function FinishScreen() {
    const { points, totalPoints, highScore, dispatch } = useQuiz();

    const percentage = Math.ceil((points / totalPoints) * 100);

    return (
        <>
            <p className='result'>
                You scored <strong>{points}</strong> out of {totalPoints} ({percentage} %)
            </p>
            <p className='highscore'>(Highscore : {highScore})</p>
            <button
                className='btn btn-ui'
                onClick={() => dispatch({ type: 'restart' })}
            >
                Restart Quiz
            </button>
        </>
    );
}
