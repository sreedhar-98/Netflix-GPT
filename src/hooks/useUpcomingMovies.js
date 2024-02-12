import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TMDB_APIOptions, TMDB_UpcomingMoviesAPI } from "../utils/constants"
import { addUpcomingMovies } from "../utils/movieSlice"

const useUpcomingMovies = ()=>{
    // Fetch Now Playing Movies from TMDB and add it in the redux store
    const dispatch = useDispatch()
    const upComing = useSelector(store=>store.movies.upComingMovies)
  useEffect(()=>{
    !upComing && upcomingMovies()
  },[])
  const upcomingMovies = async()=>{
    const data = await fetch(TMDB_UpcomingMoviesAPI,TMDB_APIOptions);
    const json = await data.json()
    dispatch(addUpcomingMovies(json.results))
  }
}

export default useUpcomingMovies