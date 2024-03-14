import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import NumResults from './components/NumResults';
import Main from './components/Main';
import Box from './components/Box';
import MovieList from './components/MovieList';
import tempWatchedData from './watchedData';
import tempMovieData from './movieData';
import WatchedSummary from './components/WatchedSummary';
import WatchedList from './components/WatchedList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const KEY = '312774fb';
export default function App() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const temp = 'interstellar';

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError('');
            try {
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

                if (!res.ok) throw new Error('Something went wrong with fetching movies');

                const data = await res.json();

                if (data.Response === 'False') throw new Error('Movie not found');
                setMovies(data.Search);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (query.length < 3) {
            setMovies([]);
            setError('');
            return;
        }
        fetchData();
    }, [query]);
    return (
        <>
            <Navbar>
                <Search
                    query={query}
                    setQuery={setQuery}
                />
                <NumResults movies={movies} />
            </Navbar>
            <Main>
                <Box>
                    {isLoading && <Loader />}
                    {!isLoading && !error && <MovieList movies={movies} />}
                    {error && <ErrorMessage message={error} />}
                </Box>
                <Box>
                    <WatchedSummary watched={watched} />
                    <WatchedList watched={watched} />
                </Box>
            </Main>
        </>
    );
}
