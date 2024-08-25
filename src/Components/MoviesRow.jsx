import React from 'react'
import MoviesList from './MoviesList';

const MoviesRow = ({movies,title}) => {
    console.log(movies);
    const slide = (s,value) => {
        var slider = document.getElementById(s);
        slider.scrollLeft = slider.scrollLeft + value;
        const percentagevisted=((slider.scrollLeft)/slider.scrollWidth)*100;
        if(percentagevisted>69)
          slider.scrollLeft=0
      };
  return (
    <div className=''>
    <h1 className='text-white pl-3 py-3 '>{title}</h1>
    <div className='relative'>
      <button className='h-[85%] z-10 absolute pb-5 right-0  m-auto font-bold bg-gradient-to-l from-black text-8xl text-white opacity-0 on hover:opacity-60 rounded-md ' onClick={()=>slide(title,500)}>{'>'}</button>
      <div id={title} className='flex overflow-x-scroll no-scrollbar scroll-smooth justify-evenly'>
        {movies?.map(m => <MoviesList movies={m} />)}
      </div>
      <button className='h-[85%] z-10 absolute left-0 top-0 m-auto font-bold bg-gradient-to-r from-black text-8xl text-white opacity-0 on hover:opacity-60 rounded-md ' onClick={()=>slide(title,-500)}>{'<'}</button>
    </div>
  </div>
  )
}

export default MoviesRow