import { useQuiz } from '../context/QuizContext';

export default function Option({ question }) {
    const { dispatch, answer } = useQuiz();

    const { options, correctOption } = question;
    const hasAnswered = answer !== null;
    return (
        <div className='options'>
            {options.map((option, index) => (
                <button
                    className={`btn btn-option ${index === answer ? 'answer' : ''} ${
                        hasAnswered ? (index === correctOption ? 'correct' : 'wrong') : ''
                    }`}
                    key={option}
                    disabled={hasAnswered}
                    onClick={() => dispatch({ type: 'newAnswer', payload: index })}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
