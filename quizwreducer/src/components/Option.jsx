export default function Option({ question }) {
    const { id, options, points } = question;
    return (
        <div className='options'>
            {options.map((option) => (
                <button
                    className='btn btn-option'
                    key={option}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
