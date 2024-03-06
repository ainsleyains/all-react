export default function Output({ bill, tips }) {
    return (
        <div className=''>
            <h3>{`You pay $ ${bill + tips} ($ ${bill}  + $ ${tips} tips)`}</h3>
        </div>
    );
}
