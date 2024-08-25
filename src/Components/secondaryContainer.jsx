import React from 'react'
import MoviCard from './MoviCard'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MoviesRow from './MoviesRow'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies.nowPlayingMovies)
  const popularMovies = useSelector(store => store.movies.popularMovies)
  const TopratedMovies = useSelector(store => store.movies.TopRatedMovies)
  const slideRight = (s) => {
    var slider = document.getElementById(s);
    slider.scrollLeft = slider.scrollLeft + 500;
    // console.log(slider.scrollWidth, slider.scrollLeft)
  };
  const slideleft = (s) => {
    var slider = document.getElementById(s);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  // console.log(popularMovies)
  return (
    <div className='bg-black'>
      <div className='  pl-3 -mt-36 relative z-50 '>
        {/* <div className=''>
          <h1 className='text-white pl-3 py-3 '>Now Playing</h1>
          <div className='relative'>
            <button className='h-[85%] z-10 absolute pb-5 right-0  m-auto font-bold bg-gradient-to-l from-black text-8xl text-white opacity-0 on hover:opacity-60 rounded-md ' onClick={()=>slideRight("slider-1")}>{'>'}</button>
            <div id='slider-1' className='flex overflow-x-scroll no-scrollbar scroll-smooth'>
              {movies?.map(m => <MoviesList movies={m} />)}
            </div>
            <button className='h-[85%] z-10 absolute left-0 top-0 m-auto font-bold bg-gradient-to-r from-black text-8xl text-white opacity-0 on hover:opacity-60 rounded-md ' onClick={()=>slideleft("slider-1")}>{'<'}</button>
          </div>
        </div> */}
        <MoviesRow movies={movies} title={"Now Playing"}/>
        <MoviesRow movies={popularMovies} title={"Popular Movies"}/>
        <MoviesRow movies={TopratedMovies} title={"Top Rated Movies<"}/>
        {/* <div className=''>
          <h1 className='text-white pl-3 py-3 '>Popular Movies</h1>
          <div className='relative'>
            <button className='h-[85%] z-10 absolute pb-5 right-0  m-auto font-bold bg-gradient-to-l from-black text-8xl text-white opacity-0 on hover:opacity-60 rounded-md ' onClick={()=>slideRight("slider-2")}>{'>'}</button>
            <div id='slider-2' className='flex overflow-x-scroll no-scrollbar scroll-smooth'>
              {popularMovies?.map(m => <MoviesList movies={m}/>)}
            </div>
            <button className='h-[85%] z-10 absolute left-0 top-0 m-auto font-bold bg-gradient-to-r from-black text-8xl text-white opacity-0 on hover:opacity-60 rounded-md ' onClick={()=>slideleft("slider-2")}>{'<'}</button>
          </div>
        </div> */}

        {/* <div className=''>
          <h1 className='text-white pl-3 py-3 '>Top Rated Movies</h1>
          <div className='relative'>
            <button className='h-[85%] z-10 absolute pb-5 right-0  m-auto font-bold bg-gradient-to-l from-black text-8xl text-white opacity-0 on hover:opacity-60 rounded-md ' onClick={()=>slideRight("slider-3")}>{'>'}</button>
            <div id='slider-3' className='flex overflow-x-scroll no-scrollbar scroll-smooth'>
              {TopratedMovies?.map(m => <MoviesList movies={m} />)}
            </div>
            <button className='h-[85%] z-10 absolute left-0 top-0 m-auto font-bold bg-gradient-to-r from-black text-8xl text-white opacity-0 on hover:opacity-60 rounded-md ' onClick={()=>slideleft("slider-3")}>{'<'}</button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default SecondaryContainer