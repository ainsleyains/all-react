import { useQuiz } from '../context/QuizContext';

export default function Progress() {
    const { index, numQuestions, points, totalPoints, answer } = useQuiz();

    return (
        <header className='progress'>
            <progress
                max={numQuestions}
                value={index + Number(answer !== null)}
            />
            <p>
                Question <strong>{index + 1}</strong> / <strong>{numQuestions}</strong>
            </p>

            <p>
                <strong>{points}</strong> /{totalPoints}
            </p>
        </header>
    );
}
