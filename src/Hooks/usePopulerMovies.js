
import { useDispatch, useSelector } from 'react-redux'
import { addNowplayingMovies, addPopulerMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { getOptions } from '../Utils/constants';

const usePopulerMovies= ()=>{
  const populerMovies= useSelector((store)=>store.movies.populerMovies)
    const Dispatch=useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/popular?page=2';
  
useEffect(()=>{
  if(!populerMovies){
    fetch(url, getOptions)
    .then(res => res.json())
    .then(json => {
    Dispatch(addPopulerMovies(json.results))
    })
    .catch(err => console.error('error:' + err));
  }
  
},[])
}

export default usePopulerMovies;