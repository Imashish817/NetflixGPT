import React from 'react'
import MoviCard from './MoviCard'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies.nowPlayingMovies)
  if (!movies) {
    return;
  }
  return (
    <div className=' bg-black'>
      <div className='pl-3 -mt-36 relative z-50'>
        <h1 className='text-white'>Now Playing</h1>
        <div className='flex overflow-x-scroll'>
          {
            movies.map((m) => {
              // console.log(m.title);
              return <MoviCard poster={m?.poster_path} Title={m?.title} />
            })
          }
        </div>

        <h1 className='text-white'>Trending</h1>
        <div className='flex overflow-x-scroll'>
          {
            movies.map((m) => {
              // console.log(m.title);
              return <MoviCard poster={m?.poster_path} Title={m?.title} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SecondaryContainer