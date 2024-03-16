import { useEffect } from 'react';
import { useRef } from 'react';
import { useKey } from '../useKey';

export default function Search({ query, setQuery }) {
    const inputEl = useRef(null);

    useKey('Enter', function () {
        // if input still on focus press return key wont do anything
        if (document.activeElement === inputEl.current) return;
        // taget current property
        inputEl.current.focus();
        // set return key to empty input
        setQuery('');
    });

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
