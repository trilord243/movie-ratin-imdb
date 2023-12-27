/* eslint-disable react/prop-types */


export const Movie = ({ movie, setSelectedMovie }) => {
    const handleMovieID = () => {
        setSelectedMovie((id) => id === movie.imdbID ? null : movie.imdbID)
    }

    return (
        <li onClick={handleMovieID}  >
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    )
}
