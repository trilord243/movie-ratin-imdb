/* eslint-disable react/prop-types */


export const Watched = ({ movie, watched, setWatched }) => {
    const handleDelete = () => {
        const newWatched = watched.filter((watchedMovie) => watchedMovie.imdbID !== movie.imdbID)
        setWatched(newWatched)
    }

    return (
        <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
                <button className="btn-delete" onClick={handleDelete} >X</button>
            </div>
        </li>
    )
}
