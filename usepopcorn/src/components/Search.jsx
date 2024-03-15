import { useEffect } from 'react';
import { useRef } from 'react';

export default function Search({ query, setQuery }) {
    const inputEl = useRef(null);

    useEffect(() => {
        // use keydown
        function callback(e) {
            // if input still on focus press return key wont do anything
            if (document.activeElement === inputEl.current) return;
            if (e.code === 'Enter') {
                // taget current property
                inputEl.current.focus();
                // set return key to empty input
                setQuery('');
            }
        }
        document.addEventListener('keydown', callback);
        return () => document.addEventListener('keydown', callback);
    }, [setQuery]);

    return (
        <input
            className='search'
            type='text'
            placeholder='Search movies...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputEl}
        />
    );
}
