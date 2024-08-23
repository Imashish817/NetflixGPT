import React from 'react'

import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './mainContainer';
import SecondaryContainer from './secondaryContainer';

const fetch = require('node-fetch');
const Browse = () => {
  const NowPlayingMovies = useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse