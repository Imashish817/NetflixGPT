import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies: null,
        TopRatedMovies: null
    },
    reducers: {
        addNowplayingMovies : (state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopulerMovies : (state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload
        }

    }
    
})

export const {addNowplayingMovies,addPopulerMovies,addTopRatedMovies}=moviesSlice.actions;
export default moviesSlice.reducer;