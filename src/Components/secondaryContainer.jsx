import React from 'react'
import MoviCard from './MoviCard'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MoviesRow from './MoviesRow'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies.nowPlayingMovies)
  const popularMovies = useSelector(store => store.movies.popularMovies)
  const TopratedMovies = useSelector(store => store.movies.TopRatedMovies)
  // console.log(popularMovies)
  return (
    <div className='bg-black'>
      <div className='  pl-3 -mt-36 relative z-50 '>
        <MoviesRow movies={movies} title={"Now Playing"}/>
        <MoviesRow movies={popularMovies} title={"Popular Movies"}/>
        <MoviesRow movies={TopratedMovies} title={"Top Rated Movies<"}/>
      </div>
    </div>
  )
}

export default SecondaryContainer