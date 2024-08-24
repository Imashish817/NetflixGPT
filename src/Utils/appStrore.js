import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducers from "./moviesSlice";
import GPTReducer from "./GPTSlice"



const appStore= configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducers,
            GPTSearch: GPTReducer
        }
    }
)

export default appStore;