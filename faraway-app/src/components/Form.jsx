import { useState } from 'react';

export default function Form() {
    const [des, setDes] = useState('');
    const [qty, setQty] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!des) return;
        const newItem = { des, qty, packed: false, id: Date.now() };
        console.log(newItem);
        setDes('');
        setQty(1);
    }

    return (
        <form
            className='add-form'
            onSubmit={handleSubmit}
        >
            <h3>What do you need for your trip 😍</h3>
            <select
                value={qty}
                onChange={(e) => setQty(+e.target.value)}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option
                        value={num}
                        key={num}
                    >
                        {num}
                    </option>
                ))}
            </select>
            <input
                type='text'
                placeholder='Item...'
                value={des}
                onChange={(e) => setDes(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}
