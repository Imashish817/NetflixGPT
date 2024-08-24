
import { useDispatch } from 'react-redux'
import { addNowplayingMovies, addPopulerMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { getOptions } from '../Utils/constants';

const usePopulerMovies= ()=>{
    const Dispatch=useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/popular?page=2';
  
useEffect(()=>{
  fetch(url, getOptions)
  .then(res => res.json())
  .then(json => {
  Dispatch(addPopulerMovies(json.results))
  })
  .catch(err => console.error('error:' + err));
},[])
}

export default usePopulerMovies;