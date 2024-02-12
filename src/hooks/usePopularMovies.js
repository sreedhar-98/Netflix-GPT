import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TMDB_APIOptions, TMDB_PopularMoviesAPI } from "../utils/constants"
import { addPopularMovies } from "../utils/movieSlice"

const usePopularMovies = ()=>{
    // Fetch Now Playing Movies from TMDB and add it in the redux store
    const dispatch = useDispatch()
    const popular = useSelector(store=>store.movies.popularMovies)
  useEffect(()=>{
    !popular && popularMovies()
  },[])
  const popularMovies = async()=>{
    const data = await fetch(TMDB_PopularMoviesAPI,TMDB_APIOptions);
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }
}

export default usePopularMovies