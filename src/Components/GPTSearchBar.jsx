import React, { useRef } from 'react'

import OpenAI from 'openai';
import { getOptions } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addsearchedGPT } from '../Utils/GPTSlice';


const GPTSearchBar = () => {
  const input = useRef();
  const Dispacher=useDispatch();
  const TMDBMoviserch = async (movi_name) => {
    
    const fetch = require('node-fetch');
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + movi_name + '&include_adult=true&page=1&language=en-US';
    const data= await fetch(url, getOptions);
    const json=await data.json();
    console.log(json.results)
    const filtered=json.results.filter((m)=> {

      return m.title.toLowerCase()=== movi_name.toLowerCase()
    })
    return json.results;
  }

  const handleSearch = async () => {
    console.log(process.env.REACT_APP_NEXT_PUBLIC_OPENAI_KEY)
    const client = new OpenAI({
      apiKey: process.env.REACT_APP_NEXT_PUBLIC_OPENAI_KEY,
      dangerouslyAllowBrowser: true
    });
    const GPTQuery = "Act as a moview recomendation system and suggest for the query "
      + input.current.value +
      ". only give me 10 movies sorted by rating of movie comma seperated with no numbering. like the example result given ahead. example result: gadar, don, conjurging, golmal, dhole";
    const GPTResult = await client.chat.completions.create({
      messages: [{ role: 'user', content: GPTQuery }],
      model: 'gpt-3.5-turbo',
    });
    const Result = GPTResult.choices[0].message.content.split(",");
    // const Result=["Ringu", "Ju-on: The Grudge", "Dark Water", "Audition", "Pulse", "Kwaidan", "One Missed Call", "Tokyo Gore Police", 'Cure', "Over Your Dead Body"]
    console.log(GPTResult.choices[0].message.content);
    const movi_promish=Result.map((movi) => {
       return TMDBMoviserch(movi);
    })
    console.log(movi_promish)
    const serchMoviesList=await Promise.all(movi_promish);
    
    
    Dispacher(addsearchedGPT(serchMoviesList));
  }
  return (
    <div className='flex justify-center '>
      <form className='mt-[10%] bg-black bg-opacity-70 grid grid-cols-12 rounded-xl' onSubmit={(e) => e.preventDefault()}>
        <input ref={input} type="text" className='p-2 col-span-9 m-3 rounded-lg ' placeholder='What do you want to see Today?' />
        <button className='text-white px-5 py-2 col-span-3  rounded-lg m-3 bg-red-600' onClick={handleSearch}>Search</button>
      </form>
    </div>
  )
}

export default GPTSearchBar