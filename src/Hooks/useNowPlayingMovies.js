
import { useDispatch } from 'react-redux'
import { addNowplayingMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';

const useNowPlayingMovies= ()=>{
    const Dispatch=useDispatch();
  const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODkxNjliYWMyMDhmNGY2ZmI5M2FjNmJlNDBjNjQ1ZSIsIm5iZiI6MTcyNDM2NzMzNi40Mzc1OTksInN1YiI6IjY2YzdiODhhMTQxOTI4Zjg5MmMzYjg5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XRfn1uo6K2Pc2scDFUrYeo3ellL4bZN8hf9hpimkYdU'
    }
  };
useEffect(()=>{
  fetch(url, options)
  .then(res => res.json())
  .then(json => {
  Dispatch(addNowplayingMovies(json.results))
  })
  .catch(err => console.error('error:' + err));
},[])
}

export default useNowPlayingMovies;