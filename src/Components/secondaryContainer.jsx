import React from 'react'
import MoviCard from './MoviCard'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies.nowPlayingMovies)
  const popularMovies=useSelector(store=> store.movies.popularMovies)
  const TopratedMovies=useSelector(store=>store.movies.TopRatedMovies)
 
  // console.log(popularMovies)
  return (
    <div className=' bg-black'>
      <div className='pl-3 -mt-36 relative z-50'>
        <h1 className='text-white pl-3 py-3'>Now Playing</h1>
        <div className='flex overflow-x-scroll'>
          {movies?.map(m => <MoviesList movies={m} />)}
        </div>
        <h1 className='text-white pl-3 py-3'>Popular Movies</h1>
        <div className='flex overflow-x-scroll'>
          {popularMovies?.map(m => <MoviesList movies={m} />)}
        </div>
        <h1 className='text-white pl-3 py-3'>Top Rated Movies</h1>
        <div className='flex overflow-x-scroll'>
          {TopratedMovies?.map(m => <MoviesList movies={m} />)}
        </div>
      </div>
    </div>
  )
}

export default SecondaryContainer