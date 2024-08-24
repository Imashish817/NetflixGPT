import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchResult from './GPTSearchSuggestion'

const GPTSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
          
            <img
              className="cursor-pointer"
              src="https://wallpapercave.com/wp/wp1917134.jpg"
              alt="img"
            />
        
        </div>
        <GPTSearchBar/>
        <GPTSearchResult/>
    </div>
  )
}

export default GPTSearch