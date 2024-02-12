import React from 'react'
import { TMDB_ImageCDNUrl } from '../utils/constants'
import { Link } from 'react-router-dom'

const MovieCard = ({posterPath,movie}) => {
  if(! posterPath) return
  return (
    <div className='cursor-pointer rounded-md shadow-md shadow-gray-600'>
      <Link to={`/movie/${movie.id}`} state= {{ movie: movie }}>
       <img className='md:w-36 w-28 sm:w-32 hover:scale-105 duration-200 object-cover rounded-md' src={TMDB_ImageCDNUrl+posterPath} alt="movie image" />
       </Link>
    </div>
  )
}

export default MovieCard