import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const GPTSearchSuggestion = () => {
  const movies = useSelector(store => store.GPTSearch.movies)

  if (!movies) {
    return
  }
  return (
    <div className='  relative '>
      <div>
        {movies.map(m => {
          return (
            <div className='bg-gradient-to-bl from-black pl-3'>
              <h1 className='text-white pl-3 py-3'>{m[0].title}</h1>
              <div className='flex overflow-x-scroll'>
                {m.map((mov) => mov.poster_path && <MoviesList movies={mov} />)}
              </div>
            </div>)
        })}

      </div>
    </div>
    // movies.map((m)=> <MoviesList movies={m}/>)
  )
}

export default GPTSearchSuggestion