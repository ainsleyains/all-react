import { useState, useEffect } from 'react';

const KEY = '312774fb';
export function useMovie(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            setIsLoading(true);
            setError('');
            try {
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
                    signal: controller.signal,
                });

                if (!res.ok) throw new Error('Something went wrong with fetching movies');

                const data = await res.json();

                if (data.Response === 'False') throw new Error('Movie not found');
                setMovies(data.Search);
                setError('');
            } catch (err) {
                console.log(err.message);
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        if (query.length < 3) {
            setMovies([]);
            setError('');
            return;
        }

        fetchData();
        return function () {
            controller.abort();
        };
    }, [query]);
    return { movies, isLoading, error };
}
