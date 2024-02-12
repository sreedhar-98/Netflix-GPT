import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { LoginBG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div className='relative h-screen'>
      <div className='fixed bg-cover bg-center -z-10'>
        <img className='w-screen object-cover' src={LoginBG} alt="bg-image" />
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch