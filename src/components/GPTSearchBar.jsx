import React, { useRef } from "react";
import openai from "../utils/openai";
import { TMDB_APIOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch()

  const handleOpenAiSearch = async()=>{

    try {
      
    const searchPrompt = "Act as a movie recommendation system and suggest some movies for the query: "+searchText.current.value+". Only give names of 5 movies, comma separated like the example result given ahead. Example result : 3 idiots, Koi mil gaya, swadesh, kick, 12th fail"
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: searchPrompt }],
      model: 'gpt-3.5-turbo',
    });

    const gptMovies = chatCompletion?.choices[0]?.message?.content.split(",")
    // const gptMovies = ["3 idiots", "Koi mil gaya", "swadesh", "kick", "12th fail"]

    // const allMovies = gptMovies.map((gptMovie)=>searchMovies(gptMovie.trim().replace(' ','%20')))
    const allMovies = gptMovies.map((gptMovie)=>searchMovies(gptMovie))

    const movies = await Promise.all(allMovies)
    dispatch(addGPTMovies({movieNames:gptMovies,movieResults:movies}))

    } catch (error) {
      console.log(error.message)
      alert("GPT API is not reachable: "+error.message)
    }
  }
  
  

  const searchMovies =async(movie)=>{
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',TMDB_APIOptions)

      const json = await data.json()
      return json.results
  }
  return (
    <div className="px-4 md:px-14">
      <form
        className="pt-[30%] sm:pt-[20%] md:pt-[10%] px-2 md:px-10 flex gap-2 items-center w-full"
        onSubmit={(e)=>e.preventDefault()}
      >
        <input
          ref={searchText}
          className="md:px-6 md:py-3 px-2 py-1 rounded-md flex-grow text-xs sm:text-sm md:text-lg"
          type="text"
          placeholder="What movie would you like to watch today?"
        />
        <button className="bg-red-500 md:px-6 md:py-3 px-2 py-1 text-white font-semibold rounded-lg text-xs sm:text-sm md:text-md lg:text-lg" onClick={handleOpenAiSearch}>
          <div className="flex gap-1 items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="md:w-6 md:h-6 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          Search</div>
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
