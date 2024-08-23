import React, { useEffect } from 'react'

const VideoTitle = ({ overview, VideoTitle }) => {

    
    return (
        <div className='py-36 px-9 absolute text-white bg-gradient-to-r from-black h-screen'>
            <h1 className='text-3xl font-bold'>{VideoTitle}</h1>
            <p className='w-1/2 py-10 text-lg'>{overview}</p>
            <div className=''>
                <button className='px-8 py-3 bg-white text-black rounded-lg text-center bg-opacity-80'> ▶Play</button>
                <button className='px-8 py-3 bg-slate-400 mx-7 text-white rounded-lg text-center bg-opacity-80'>ℹ️More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle