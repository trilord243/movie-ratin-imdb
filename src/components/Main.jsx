/* eslint-disable react/prop-types */

import { ListBox } from './Movie/ListBox';
import { WatchedBox } from './Box/WatchedBox';



export const Main = ({ tempMovieData, movies, tempWatchedData }) => {


    return (
        <main className="main">
            <ListBox movies={movies} tempMovieData={tempMovieData} />
            <WatchedBox tempWatchedData={tempWatchedData} />

        </main>
    )
}
