
const useMoviTrailer=  () => {
    const url = `https://api.themoviedb.org/3/movie/${moviId}/videos`;
     fetch(url, getOptions)
        .then(res => res.json())
        .then(json => {
            const FilteredVideos = json?.results.filter((m) => m?.type === "Trailer");
            const trailerid = FilteredVideos[0]?.key || json?.results[0]?.key;
            return trailerid;
        })
        .catch(err => console.error('error:' + err));
}

