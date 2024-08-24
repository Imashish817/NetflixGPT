import { createSlice } from "@reduxjs/toolkit";


const GPTSlice = createSlice({
    name: "GPTSearch",
    initialState: {
        GPTSearchToggle: false,
        movies:null
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.GPTSearchToggle = !state.GPTSearchToggle
        },
        addsearchedGPT: (state,action)=>{
            state.movies=action.payload;
        }
    }
})

export const { toggleGPTSearch,addsearchedGPT } = GPTSlice.actions;
export default GPTSlice.reducer;