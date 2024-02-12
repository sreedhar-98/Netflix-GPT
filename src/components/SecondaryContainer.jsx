import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (movies &&<div className='flex flex-col bg-black pb-6'>
      <div className=' relative rounded-lg px-8 text-white sm:-mt-16 md:-mt-28'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies?.upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer