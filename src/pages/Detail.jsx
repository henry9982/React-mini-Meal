import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { useGetMealDetailQuery } from '../features/api/foodieApi-query';
import {PiYoutubeLogoFill} from "react-icons/pi"
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';


const Detail = () => {
  const {key}  = useLocation()
  const {id} = useParams()
  const {data,error,isLoading} = useGetMealDetailQuery(id)
  const products = useSelector(state=>state.meals)
  useEffect(()=>{
  },[products])
  const [readMore,setReadMore] = useState(false)


  if (key==='default') {
    return <Navigate to={'/'}/>
  }else{
    return (
      <>
        {isLoading?<Loader/>:    data?.meals.map(details=><div key={details.idMeal} className='bg-[#fdfdfd] border-2 max-[500px]:w-11/12 p-5 gap-5 rounded-xl flex flex-col  my-8 shadow-xl sm:w-[500px] shadow-slate-300/50 justify-center items-center mx-auto w-96'>
          <img className='rounded-xl' src={details.strMealThumb} alt="" />
            <h1 className='text-2xl text-[#CD5C08] font-semibold'>{details.strMeal}</h1>
            <ul className='w-full flex flex-row justify-between items-center'>
              <li className='text-[#cdac39] font-semibold text-xl'>{details.strCategory}</li>
              <li className='text-[#cdac39] font-semibold text-xl'>{details.strArea}</li>
            </ul>
            <div className='flex flex-col gap-2 '>
              <div className='font-semibold text-[#6A9C89]'>Instruction</div>
              <div className=''>
                <div className={`text-[#435845] mx-auto font-mono transition ${readMore? "" : "line-clamp-6"}`}>{details.strInstructions}</div>
                <div onClick={() => setReadMore(!readMore)} className='flex cursor-pointer items-center hover:scale-90 hover:readMoreHover hover:bg-black hover:text-white transition duration-200 gap-1 border w-fit px-2 py-1 rounded-md justify-center border-black mt-1 upp'>
                  <button className='-mt-1' >{readMore? "show less" : "read more"}</button>
                  <div className='-mb-'>{readMore?<IoIosArrowUp/>:<IoIosArrowDown/>}</div>
                </div>
              </div>
            </div>
          <a className='self-end flex items-center gap-2 underline underline-offset-4' target='_blank' href={details.strYoutube}><small>Check Whole Cooking Video</small>{<PiYoutubeLogoFill className='text-2xl hover:scale-110 transition duration-200 text-red-500'/>}</a>
      </div>)}
      </>
    )
  }
}

export default Detail