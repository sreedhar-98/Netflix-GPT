import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TMDB_APIOptions, TMDB_NowPlayingMoviesAPI } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/movieSlice"

const useNowPlayingMovies = ()=>{
    // Fetch Now Playing Movies from TMDB and add it in the redux store
    const dispatch = useDispatch()
    const PlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
  useEffect(()=>{
    !PlayingMovies&& nowPlayingMovies()
  },[])
  const nowPlayingMovies = async()=>{
    const data = await fetch(TMDB_NowPlayingMoviesAPI,TMDB_APIOptions);
    const json = await data.json()
    dispatch(addNowPlayingMovies(json.results))
  }
}

export default useNowPlayingMovies