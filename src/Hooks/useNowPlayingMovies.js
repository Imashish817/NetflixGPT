
import { useDispatch, useSelector } from 'react-redux'
import { addNowplayingMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { getOptions } from '../Utils/constants';

const useNowPlayingMovies = (pageno) => {
  pageno=pageno||1
  const nowPlayingMovies= useSelector((store)=>store.movies.nowPlayingMovies)
  const Dispatch = useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/now_playing?page='+pageno;
  useEffect(() => {
    if(!nowPlayingMovies)
    {
      fetch(url, getOptions)
      .then(res => res.json())
      .then(json => {
        Dispatch(addNowplayingMovies(json.results))
      })
      .catch(err => console.error('error:' + err));
    }
    
  }, [])
}

export default useNowPlayingMovies;