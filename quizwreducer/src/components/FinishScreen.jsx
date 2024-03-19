export default function FinishScreen({ points, totalPoints, highScore, dispatch }) {
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
