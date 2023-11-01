import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMealDetailQuery } from '../features/api/foodieApi-query';
import {PiYoutubeLogoFill} from "react-icons/pi"


const Detail = () => {
  const {id} = useParams()
  console.log(id);
  const {data,error,isLoading} = useGetMealDetailQuery(id)
  const details = data?.meals[0]
  console.log(details);
  const [readMore,setReadMore] = useState(false)
  const length = details?.strInstructions.length
  console.log(length);
  const cutString = length&&length>800&&(details?.strInstructions).substring(0,800) + '...' 
  console.log(cutString);
  const wholeString = details?.strInstructions
  console.log(wholeString);
  const whenNothing = 'No Instruction, Sorry.'

  return (
    <>
      {isLoading?<div>Loading</div>:    <div className='bg-[#fdfdfd] border-2 p-5 gap-5 rounded-xl flex flex-col  my-8 shadow-xl sm:w-[500px] shadow-slate-300/50 justify-center items-center mx-auto w-96'>
        <img className='rounded-xl' src={details.strMealThumb} alt="" />
          <h1 className='text-2xl text-[#CD5C08] font-semibold'>{details.strMeal}</h1>
          <ul className='w-full flex flex-row justify-between items-center'>
            <li className='text-[#cdac39] font-semibold text-xl'>{details.strCategory}</li>
            <li className='text-[#cdac39] font-semibold text-xl'>{details.strArea}</li>
          </ul>
          <div className='flex flex-col gap-2 '>
            <div className='font-semibold text-[#6A9C89]'>Instruction</div>
            <div className=''>
              <div className={`text-[#435845] mx-auto font-mono ${readMore? "" : "line-clamp-6"}`}>{details.strInstructions}</div>
              <button className='underline underline-offset-2' onClick={() => setReadMore(!readMore)}>{readMore? "show less" : "read more"}</button>
            </div>
          </div>
        <a className='self-end flex items-center gap-2 underline underline-offset-4' target='_blank' href={details.strYoutube}><small>Check Whole Cooking Video</small>{<PiYoutubeLogoFill className='text-2xl text-red-500'/>}</a>
    </div>}
    </>
  )
}

export default Detail