import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MoviesRow from './MoviesRow'

const GPTSearchSuggestion = () => {
  const movies = useSelector(store => store.GPTSearch.movies)

  if (!movies) {
    return
  }

  return (
    <div className='relative '>
      <div>
        {movies.map(m => <MoviesRow movies={m} title={m[0].title} />)}
      </div>
    </div>
    // movies.map((m)=> <MoviesList movies={m}/>)
  )
}

export default GPTSearchSuggestion