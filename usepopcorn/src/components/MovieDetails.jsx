import { useEffect, useState } from 'react';
import StarsRating from './StarsRating';
import Loader from './Loader';

export default function MovieDetails({ selectedId, onCloseMovie }) {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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
                        <StarsRating
                            maxRating={10}
                            size={24}
                        />
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
