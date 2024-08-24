 export const getOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+process.env.REACT_APP_TMDB_Access_Token
    }
};
export const TrailerBaseURL="https://www.youtube.com/embed/";
