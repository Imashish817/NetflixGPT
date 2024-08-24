import React, { useEffect, useState } from 'react'

const VideoTitle = ({ overview, VideoTitle }) => {

    const [view, setOverview]=useState("")
    const [showflag,setShowFlag]=useState(1);
    const [showbtn,setShowbtn]=useState("show more");
    useEffect(()=>{
        if(overview?.length>200)
        {
            setOverview( overview.substring(0,150)+"...");
        }
        else{
            setOverview(overview);
            setShowbtn("")
        }
    },[overview])
    const handleShow=()=>{
        if(showflag===1)
        {
            setOverview(overview);
            setShowFlag(0);
            setShowbtn("show less")
        }
        else{
            setOverview( overview.substring(0,150)+"...");
            setShowFlag(1);
            setShowbtn("show more")
        }
    }
    return (
        <div className='py-32 px-9 absolute text-white bg-gradient-to-r from-black h-screen'>
            <h5 className='text-2xl font-bold'>{VideoTitle}</h5>
            <h5 className='w-1/2 py-10 text-sm'>{view} <button className=' rounded-lg text-xs p-1' onClick={handleShow}>{showbtn}</button></h5>
            
            <div className=''>
                <button className='px-6 py-2 bg-white text-black rounded-lg text-center bg-opacity-80'> ▶Play</button>
                <button className='px-6 py-2 bg-slate-400 mx-7 text-white rounded-lg text-center bg-opacity-30'>ℹ️More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle