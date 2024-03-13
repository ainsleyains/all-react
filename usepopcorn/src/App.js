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

const KEY = '312774fb';
export default function App() {
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`);
                const data = await res.json();
                setMovies(data.Search);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <Navbar>
                <Search />
                <NumResults movies={movies} />
            </Navbar>
            <Main>
                <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>
                <Box>
                    <WatchedSummary watched={watched} />
                    <WatchedList watched={watched} />
                </Box>
            </Main>
        </>
    );
}
