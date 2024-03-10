import { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import NumResults from './components/NumResults';
import Main from './components/Main';
import ListBox from './components/ListBox';
import MovieList from './components/MovieList';
import WatchedBox from './components/WatchedBox';
import tempMovieData from './movieData';
export default function App() {
    const [movies, setMovies] = useState(tempMovieData);
    return (
        <>
            <Navbar>
                <Search />
                <NumResults movies={movies} />
            </Navbar>
            <Main>
                <ListBox>
                    <MovieList movies={movies} />
                </ListBox>
                <WatchedBox />
            </Main>
        </>
    );
}
