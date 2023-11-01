import React from 'react'
import { BiBookReader } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';

const Card = ({meal,isDefault}) => {
  console.log(meal);
  const navigate = useNavigate()
  return (
    <div className={`border border-black rounded-xl bg-white w-64 overflow-hidden transition hover:scale-105  font-poppins`}>
        <img src={meal.strMealThumb} className='w-64 object-contain  rounded-bl-[30px]' alt="" />
        <div className='p-4 border-t relative border-black  flex flex-col gap-3 justify-between items-center rounded-tr-[40px] bg-white -mb-5 -translate-y-8'>
           <div className={`${isDefault?'text-xl':'text-lg'} tracking-wider font-bold text-balck whitespace-nowrap overflow-hidden text-ellipsis w-full text-center`}>{meal.strMeal}</div>
            <button onClick={()=>navigate(`/detail/${meal.idMeal}`)} className='border-2 border-black shadow-lg  py-[4px] px-9 rounded-md transition bg-[#ffbf70] btnShadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none '>{<BiBookReader className='text-3xl text-[#000000] hover:scale-110 transition'/>}</button>
        </div>
    </div>
  )
}

export default Card