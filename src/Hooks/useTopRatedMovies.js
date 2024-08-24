
import { useDispatch } from 'react-redux'
import {addTopRatedMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { getOptions } from '../Utils/constants';

const useTopRatedMovies= ()=>{
    const Dispatch=useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/top_rated?&page=3';
  
useEffect(()=>{
  fetch(url, getOptions)
  .then(res => res.json())
  .then(json => {
  Dispatch(addTopRatedMovies(json.results))
  })
  .catch(err => console.error('error:' + err));
},[])
}

export default useTopRatedMovies;