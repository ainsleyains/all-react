// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react';

export default function App() {
    const [inputVal, setInputVal] = useState('');
    const [fromCurrency, setFromCurrency] = useState('');
    const [ToCurrency, setToCurrency] = useState('');
    const [converted, setConverted] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://api.frankfurter.app/latest?amount=${inputVal}&from=${fromCurrency}&to=${ToCurrency}`
                );

                const data = await res.json();
                setConverted(data.rates[ToCurrency]);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        if (fromCurrency === ToCurrency) {
            return setConverted(inputVal);
        }
        fetchData();
    }, [inputVal, fromCurrency, ToCurrency]);

    return (
        <div>
            <input
                type='text'
                value={inputVal}
                onChange={(e) => setInputVal(+e.target.value)}
                disabled={isLoading}
            />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                disabled={isLoading}
            >
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='CAD'>CAD</option>
                <option value='INR'>INR</option>
            </select>
            <select
                value={ToCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                disabled={isLoading}
            >
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
                <option value='CAD'>CAD</option>
                <option value='INR'>INR</option>
            </select>
            <p>
                {converted} {ToCurrency}
            </p>
        </div>
    );
}
