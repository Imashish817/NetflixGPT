import React, { useEffect, useState } from 'react'
import { TrailerBaseURL, getOptions } from '../Utils/constants';
const fetch = require('node-fetch');
const VideoBaground = ({ moviId }) => {
    // console.log(moviId)
    const [trailerId, setTrailerId] = useState("")
    useEffect(() => {
        getmoviTrailer();
    }, [])
    const getmoviTrailer = async () => {
        const url = `https://api.themoviedb.org/3/movie/${moviId}/videos`;
        await fetch(url, getOptions)
            .then(res => res.json())
            .then(json => {
                const FilteredVideos = json?.results.filter((m) => m?.type === "Trailer");
                const trailerid = FilteredVideos[0]?.key || json?.results[0]?.key;
                setTrailerId(trailerid)
                // console.log(trailerid)
            })
            .catch(err => console.error('error:' + err));
    }
    return (
        <div className=''>
            <iframe className='w-screen aspect-video h-screen'
                src={TrailerBaseURL+trailerId+"?rel=0&controls=0&showinfo=0&autoplay=1&mute=1"}
                >
            </iframe>
        </div>

    )
}

export default VideoBaground