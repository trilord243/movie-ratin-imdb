/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { MovieList } from "./MovieList";


export const ListBox = ({ tempMovieData, movies }) => {

    const [isOpen1, setIsOpen1] = useState(true);
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {isOpen1 ? "–" : "+"}
            </button>
            {isOpen1 && (
                <MovieList movies={movies} />

            )}
        </div>
    )
}
