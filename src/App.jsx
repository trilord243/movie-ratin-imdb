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

const API_KEY = '58147d7b'

const API = `http://www.omdbapi.com/?apikey=${API_KEY}`



const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];


export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('matrix')

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      const res = await fetch(API + `&s=${query}`)
      const data = await res.json()
      console.log(data)
      setMovies(data.Search)

      setIsLoading(false)
    }

    fetchMovies()




  }, [])

  return (
    <>
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>

          {!isLoading ? <MovieList movies={movies} /> : <Loader />}

        </Box>
        <Box >

          <Summary watched={watched} />
          <WatchedList watched={watched} />

        </Box>
      </Main>



    </>
  );
}
