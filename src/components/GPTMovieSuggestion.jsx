import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector(store=>store.gpt)
  return (
    <div className='p-10 text-white bg-black'>
      {movieNames?.map((movie,index)=><MovieList key={movie} title={movie} movies={movieResults[index]}/>)}
    </div>
  )
}

export default GPTMovieSuggestion