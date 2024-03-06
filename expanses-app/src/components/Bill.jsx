export default function Bill({ bill, onSetBill }) {
    return (
        <div className=''>
            <label>How much was the bill ? </label>
            <input
                type='text'
                value={bill}
                onChange={(e) => onSetBill(+e.target.value)}
            />
        </div>
    );
}
