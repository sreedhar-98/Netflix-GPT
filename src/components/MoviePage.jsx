import React from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import { TMDB_ImageCDNUrl } from '../utils/constants'

const MoviePage = () => {
    // if(!location.state) return
    // const { movie = 'defaultValue' } = location.state || {}
    const {state} = useLocation()
    console.log(state?.movie)
  return (
    <div className='p-4 md:p10 text-white bg-black/90'>
      <h1 className='md:text-5xl text-2xl text-center mb-4 md:mb-8 font-semibold'>{state?.movie.title}</h1>
        <div className='mx-auto' style={{ height: '70vh' }}>
            <img className='object-contain h-full w-full rounded-lg shadow-white' src={TMDB_ImageCDNUrl+state?.movie.poster_path} alt="movie_poster" />
        </div>
        <div className='flex flex-col gap-2 md:gap-4 px-4 py-2 md:px-10 md:py-4 items-center'>
          <div className='flex flex-col md:flex-row gap-2 items-center md:items-end'>
          <h1 className='text-3xl font-semibold'>{state?.movie.title}</h1>
          <p className='font-semibold text-sm'>({state?.movie.release_date})</p>
          </div>
          <div>
          <h2 className='text-sm text-gray-400'><span className='font-semibold text-white'>Original title:</span> {state?.movie.original_title}</h2>
          <h2 className='text-sm text-gray-400'><span className='font-semibold text-white'>Popularity:</span> {state?.movie.popularity}</h2>
          <h2 className='text-sm text-gray-400'><span className='font-semibold text-white'>Original Languauge:</span> {state?.movie.original_language}</h2>
          </div>
          
          <p className='md:text-xs text-[15px] text-gray-300'>{state?.movie.overview}</p>
        </div>
    </div>
  )
}

export default MoviePage