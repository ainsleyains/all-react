export default function Percentage({ percentage, onSetPercentage, children }) {
    return (
        <div className=''>
            <label>{children}</label>
            <select
                value={percentage}
                onChange={(e) => onSetPercentage(+e.target.value)}
            >
                <option value='0'>Poor 0%</option>
                <option value='5'>Fair 5%</option>
                <option value='10'>Good 10%</option>
                <option value='15'>Excellent 15%</option>
            </select>
        </div>
    );
}
