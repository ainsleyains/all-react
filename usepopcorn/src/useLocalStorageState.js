import { useEffect, useState } from 'react';

export function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(() => {
        const storeVal = localStorage.getItem(key);
        return storeVal ? JSON.parse(storeVal) : initialState;
    });

    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}
