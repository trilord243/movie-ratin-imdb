/* eslint-disable react/prop-types */

import { Watched } from "./Watched"

export const WatchedList = ({ watched }) => {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <Watched key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    )
}
