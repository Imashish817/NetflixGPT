import React from 'react'

const MoviCard = ({ Title, poster }) => {
 
  return (
    <div className="">
      <div className='w-40 px-2 text-white rounded-lg'>
        {/* <h1 className='absolute font-bold bg-gradient-to-r from-black'>{Title}</h1> */}
        <img className='rounded-lg' src={'https://image.tmdb.org/t/p/original/' + poster} />
      </div>
    </div>


  )
}

export default MoviCard;




