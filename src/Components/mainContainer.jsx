
import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBaground from './VideoBaground'

const MainContainer = () => {
  const movies=useSelector((store)=>store.movies.nowPlayingMovies)
  if(!movies)
  {
    return;
  }
  const mainMovie=movies[2];
  console.log(mainMovie)
  return (
    <div className=''>
      <VideoTitle VideoTitle={mainMovie?.title} overview={mainMovie?.overview} />
      <VideoBaground  moviId={mainMovie?.id}/>
    </div>
  )
}

export default MainContainer