
import { useDispatch } from 'react-redux'
import { addNowplayingMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { getOptions } from '../Utils/constants';

const useNowPlayingMovies= ()=>{
    const Dispatch=useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
useEffect(()=>{
  fetch(url, getOptions)
  .then(res => res.json())
  .then(json => {
  Dispatch(addNowplayingMovies(json.results))
  })
  .catch(err => console.error('error:' + err));
},[])
}

export default useNowPlayingMovies;