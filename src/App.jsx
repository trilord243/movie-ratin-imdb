/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { Main } from "./components/Main.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Search } from "./components/Navbar/Search.jsx";
import { NumResults } from "./components/Navbar/NumResults.jsx";
import { Box } from "./components/Box.jsx";
import { WatchedBox } from "./components/Box/WatchedBox.jsx";
import { MovieList } from "./components/Movie/MovieList.jsx";
import { Summary } from "./components/Box/Summary.jsx";
import { WatchedList } from "./components/Box/WatchedList.jsx";
import { Loader } from "./components/Loader.jsx";
import { ErrorMesage } from "./components/Error.jsx";
import { MovieDetail } from "./components/MovieDetail.jsx";

const API_KEY = '58147d7b'

const API = `https://www.omdbapi.com/?apikey=${API_KEY}`





export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [errormessage, setErrormessage] = useState('')
  const [query, setQuery] = useState('')

  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleWatched(movie) {
    setWatched((prev) => [...prev, movie])
  }

  const closeMovie = () => {
    setSelectedMovie(null)
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {


        setIsLoading(true)
        setErrormessage('')
        const res = await fetch(API + `&s=${query}`)

        const data = await res.json()


        if (data.Response === 'False') {
          throw new Error(data.Error)
        }

        setMovies(data.Search)


      } catch (err) {



        setErrormessage(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (query.length < 3) {
      setMovies([])
      setErrormessage('')
      return;
    }
    fetchMovies()




  }, [query])

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>

          {isLoading && !errormessage && <Loader />}
          {!isLoading && !errormessage && <MovieList setSelectedMovie={setSelectedMovie} movies={movies} />}
          {errormessage && <ErrorMesage message={errormessage} />}

        </Box>
        <Box >

          {selectedMovie ? <MovieDetail watched={watched} handleWatched={handleWatched} closeMovie={closeMovie} selectedMovie={selectedMovie} /> :
            <>

              <Summary watched={watched} />
              <WatchedList watched={watched} setWatched={setWatched} />
            </>}

        </Box>
      </Main>



    </>
  );
}
