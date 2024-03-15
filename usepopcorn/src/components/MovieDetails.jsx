import { useEffect, useState } from 'react';
import StarsRating from './StarsRating';
import Loader from './Loader';

export default function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState('');

    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
    console.log(isWatched);

    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie;

    const watchedUserRating = watched.find((movie) => movie.imdbID === selectedId)?.userRating;

    function handleAdd() {
        const newWatchedMovie = {
            imdbID: selectedId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(' ').at(0)),
            userRating,
        };
        onAddWatched(newWatchedMovie);
        onCloseMovie();
    }

    useEffect(() => {
        const callback = (e) => {
            if (e.code === 'Escape') {
                onCloseMovie();
            }
        };
        document.addEventListener('keydown', callback);
        return function () {
            document.removeEventListener('keydown', callback);
        };
    }, [onCloseMovie]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`http://www.omdbapi.com/?apikey=312774fb&i=${selectedId}`);

                const data = await res.json();
                setMovie(data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [selectedId]);

    useEffect(() => {
        if (!title) return;
        document.title = `Movie | ${title}`;

        return function () {
            document.title = 'usepopcorn';
        };
    }, [title]);

    return (
        <div className='details'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <button
                        className='btn-back'
                        onClick={onCloseMovie}
                    >
                        &larr;
                    </button>
                    <header>
                        <img
                            src={poster}
                            alt={`poster of ${title} movie`}
                        />
                        <div className='details-overview'>
                            <h2>{title}</h2>
                            <p>
                                {released} &bull; {runtime}
                            </p>
                            <p>{genre}</p>
                            <p>
                                <span>⭐</span>
                                {imdbRating} IMdb Rating
                            </p>
                        </div>
                    </header>
                    <section>
                        <div className='rating'>
                            {!isWatched ? (
                                <>
                                    <StarsRating
                                        maxRating={10}
                                        size={24}
                                        onSetRating={setUserRating}
                                    />
                                    {userRating > 0 && (
                                        <button
                                            className='btn-add'
                                            onClick={handleAdd}
                                        >
                                            + Add to list
                                        </button>
                                    )}
                                </>
                            ) : (
                                <p>
                                    You rated with movie {watchedUserRating} <span>⭐</span>
                                </p>
                            )}
                        </div>

                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>
            )}
        </div>
    );
}
