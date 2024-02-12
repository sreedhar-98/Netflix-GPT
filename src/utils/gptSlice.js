import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'slice',
    initialState:{
        showGPTSearch: false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGPTSearchValue:(state,action)=>{
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTMovies:(state,action)=>{
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const {toggleGPTSearchValue, addGPTMovies} = gptSlice.actions
export default gptSlice.reducer