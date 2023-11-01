import React from 'react'
import { BiDish, BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <nav className='flex justify-around p-2 px-5 items-center'>
        <div className='flex items-center gap-2 hover:cursor-pointer' onClick={()=>navigate('/')}>
            <BiDish className='text-4xl text-[#d7258a] hover:scale-[1.2] smooth'/>
            <h1 className='text-2xl font-poppins font-semibold hover:scale-[1.2] smooth  text-[#F99417]'>Foodie</h1>
        </div>
        <div className='border flex items-center px-2 py-1 rounded  justify-between '>
            <input type="text" className='outline-none w-64' placeholder='Search ...' />
            <BiSearch className='text-gray-500 text-2xl cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Nav