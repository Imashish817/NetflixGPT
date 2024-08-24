import React from 'react'

import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './mainContainer';
import SecondaryContainer from './secondaryContainer';
import usePopulerMovies from '../Hooks/usePopulerMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const NowPlayingMovies = useNowPlayingMovies();
  const PopularMovies=usePopulerMovies();
  useTopRatedMovies();
  const GPTSearchToggle=useSelector(store=> store.GPTSearch.GPTSearchToggle)
  return (
    <div>
      <Header />
      {GPTSearchToggle? <GPTSearch/>:<><MainContainer/>
      <SecondaryContainer/></> }
     
      
    </div>
  )
}

export default Browse