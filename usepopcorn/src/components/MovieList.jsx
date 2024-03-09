import { useState } from 'react';
import Movie from './Movie';
import tempMovieData from '../movieData';

export default function MovieList() {
    const [movies, setMovies] = useState(tempMovieData);
    return (
        <ul className='list'>
            {/* {movies?.map((movie) => (
                <Movie
                    movie={movie}
                    key={movie.imdbID}
                />
            ))} */}
        </ul>
    );
}
