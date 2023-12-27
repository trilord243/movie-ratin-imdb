/* eslint-disable react/prop-types */

import { Movie } from "./Movie"


export const MovieList = ({ movies, setSelectedMovie }) => {

    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie setSelectedMovie={setSelectedMovie} key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    )
}
