

import { Loader } from "./Loader"
import { StarRating } from "./StarRating"
import { useEffect, useState } from "react"

const API_KEY = '58147d7b'
const API = `https://www.omdbapi.com/?apikey=${API_KEY}`
export const MovieDetail = ({ selectedMovie, closeMovie, handleWatched, watched }) => {
    const [userRating, setUserRating] = useState(null)
    const [Rating, setRating] = useState('')

    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const { Title: title, Year: year, Poster: poster, Plot: plot, Genre: genre, Director: director, Actors: actors, Runtime: runtime, imdbRating: imdbRating, Released: released } = movie


    useEffect(() => {

        document.addEventListener('keydown', (e) => { if (e.code === 'Escape') { closeMovie() } })
        return () => {
            document.removeEventListener('keydown', (e) => { if (e.code === 'Escape') { closeMovie() } })

        }
    }, [])



    const isWatched = watched.some((movie) => movie.imdbID === selectedMovie)
    useEffect(() => {

        if (isWatched) {
            setRating(watched.find((movie) => movie.imdbID === selectedMovie).userRating)
            const { userRating } = watched.find((movie) => movie.imdbID === selectedMovie)
            setUserRating(userRating)
        }
        async function getMovieDetails() {
            setIsLoading(true)

            const res = await fetch(API + `&i=${selectedMovie}`)
            const data = await res.json()
            console.log(data)
            setMovie(data)
            setIsLoading(false)




        }
        getMovieDetails()


    }, [selectedMovie])

    function handleAddMovie() {
        const newWathcMovie = {
            imdbID: selectedMovie,
            id: movie.imdbID,
            Title: movie.Title,
            Poster: movie.Poster,
            year: movie.Year,
            imdbRating: Number(movie.imdbRating),
            runtime: Number(movie.Runtime.split(' ')[0]),
            userRating: Rating,
        }
        handleWatched(newWathcMovie)
        closeMovie()
    }

    const isButtonDisabled = Rating > 0 && !isWatched


    useEffect(() => {
        if (!title) return

        document.title = `${title}`
        console.log(title)
        return () => {
            document.title = 'Trilord movie'
        }

    }, [title])
    return (
        <li className='details'>

            {isLoading ? <Loader /> :

                <>


                    <header>
                        <button onClick={closeMovie} className="btn-back">&larr; </button>
                        <img src={poster} alt={`Poster of ${poster}`} />
                        <div className="details-overview">

                            <h2> {title}  </h2>
                            <p>  {released} &bull; {runtime} </p>
                            <p>{genre} </p>
                            <p> <span>⭐</span> {imdbRating} Rating imdb     </p>

                        </div>


                    </header>

                    <section>
                        <div className="rating">

                            {!isWatched ? <StarRating maxRating={10} size={24} onsetRating={setRating} /> :
                                <p> You rated this movie with  {userRating} </p>}
                            {isButtonDisabled && <button onClick={handleAddMovie} className="btn-add"> Add movie</button>}
                        </div>


                        <p>  <em>  {plot} </em>   </p>
                        <p> Starring {actors}   </p>
                        <p>Directed by {director}</p>



                    </section>
                </>}




        </li>
    )
}
