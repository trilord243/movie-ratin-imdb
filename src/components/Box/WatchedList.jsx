/* eslint-disable react/prop-types */

import { Watched } from "./Watched"

export const WatchedList = ({ watched, setWatched }) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <Watched key={movie.imdbID} setWatched={setWatched} watched={watched} movie={movie} />
            ))}
        </ul>
    )
}
