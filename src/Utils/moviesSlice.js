import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null
    },
    reducers: {
        addNowplayingMovies : (state,action)=>{
            state.nowPlayingMovies=action.payload;
        } 
    }
    
})

export const {addNowplayingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;