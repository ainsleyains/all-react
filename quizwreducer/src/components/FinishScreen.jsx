export default function FinishScreen({ points, totalPoints }) {
    const percentage = Math.ceil((points / totalPoints) * 100);

    return (
        <p className='result'>
            You scored <strong>{points}</strong> out of {totalPoints} ({percentage} %)
        </p>
    );
}
