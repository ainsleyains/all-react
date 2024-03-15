import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import NumResults from './components/NumResults';
import Main from './components/Main';
import Box from './components/Box';
import MovieList from './components/MovieList';
import WatchedSummary from './components/WatchedSummary';
import WatchedList from './components/WatchedList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/MovieDetails';

const KEY = '312774fb';
export default function App() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    function handleSelectMovie(id) {
        setSelectedId((prevSelectedId) => (prevSelectedId === id ? null : id));
    }

    function handleCloseMovie() {
        setSelectedId(null);
    }

    function handleAddWatched(movie) {
        setWatched([...watched, movie]);
    }

    function handleDeleteWatched(id) {
        setWatched((prevWatched) => prevWatched.filter((movie) => movie.imdbID !== id));
    }

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
        handleCloseMovie();
        fetchData();
        return function () {
            controller.abort();
        };
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
                    {!isLoading && !error && (
                        <MovieList
                            movies={movies}
                            onSelectMovie={handleSelectMovie}
                        />
                    )}
                    {error && <ErrorMessage message={error} />}
                </Box>
                <Box>
                    {selectedId ? (
                        <MovieDetails
                            selectedId={selectedId}
                            onCloseMovie={handleCloseMovie}
                            onAddWatched={handleAddWatched}
                            watched={watched}
                        />
                    ) : (
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedList
                                watched={watched}
                                onDeleteWatched={handleDeleteWatched}
                            />
                        </>
                    )}
                </Box>
            </Main>
        </>
    );
}
