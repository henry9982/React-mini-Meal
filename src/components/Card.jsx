import React from 'react'
import { BiBookReader } from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import '../index.css'

const Card = ({meal,isDefault}) => {
  const navigate = useNavigate()
  return (
    <div className={` rounded-xl  bg-white w-64 overflow-hidden transition duration-300 hover:scale-105  font-poppins`} style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.2) 0px 7px 9px -3px, rgba(0, 0, 0, 0.1) 0px -3px 0px inset'}}>
        <img src={meal.strMealThumb} className='w-64 object-contain  rounded-bl-[30px]' alt="" />
        <div className='p-4     flex flex-col gap-3 justify-between items-center rounded-tr-[40px] bg-white -mb-5 -translate-y-8'>
           <div className={`${isDefault?'text-xl':'text-lg'} tracking-wider font-bold text-balck whitespace-nowrap overflow-hidden text-ellipsis w-full text-center`}>{meal.strMeal}</div>
            <button onClick={()=>navigate(`/detail/${meal.idMeal}`)} className='border-2 btnHover border-black shadow-lg  py-[4px] px-9 rounded-md transition bg-[#ffbf70] btnShadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-none '>{<BiBookReader className='text-3xl btn text-[#000000]  transition'/>}</button>
        </div>
    </div>
  )
}

export default Card