import React, { useEffect, useState } from 'react'
import { useGetAllMealsQuery, useGetMealsByCategoryQuery } from '../features/api/foodieApi-query'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { setMeals, setSearch } from '../features/services/mealSlice'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const locaiton = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const [activeCategory,setActiveCategory] = useState('topPick')
  // const fetchDataByCategory = (category)=>{
  //   setActiveCategory(category)
  //   // const categoryMeals = useGetMealsByCategoryQuery(category)
  //   // console.log(categoryMeals);
  //   navigate(`/category/${category}`)
  // }

  const emptySearch = ()=>{
    dispatch(setSearch(''))
  }
   return (
    <div className='flex flex-wrap flex-col gap-5 my-8 font-poppins'>
          <div className='lg:w-4/5 pb-12  flex flex-col gap-3 items-center justify-center lg:mx-auto px-3'>
          {/* <div className='lg:w-3/4 w-44 lg:border-b pb-12  flex flex-col gap-3 items-center justify-center lg:mx-auto lg:relative fixed  left-0 px-3 max-lg:h-screen overflow-y-auto z-50'> */}

              {/* <NavLink className={`border px-5 py-1 rounded ${activeCategory==="topPick"?'bg-[#F9B572] text-white transition scale-110':'hover:bg-[#F9B572] hover:text-white transition hover:scale-110'}`}>Top Picks</NavLink> */}
              <NavLink to={'/'} onClick={()=>emptySearch()} className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#F9B572] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#F9B572] hover:text-white transition hover:scale-110"
              } >Top Picks</NavLink>

              <div className='flex  flex-wrap md:gap-4 gap-3 justify-center items-center'>
                <NavLink onClick={()=>emptySearch()} to={'/category/Beef'} className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#8b4513] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#8b4513] hover:text-white transition hover:scale-110"
              }>Beef</NavLink>
              

                <NavLink onClick={()=>emptySearch()} to={'/category/Chicken'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#FFD700] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#FFD700] hover:text-white transition hover:scale-110"
              }>Chicken</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Dessert'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#afafff] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#afafff] hover:text-white transition hover:scale-110"
              }>Dessert</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Lamb'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#a44752] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#a44752] hover:text-white transition hover:scale-110"
              }>Lamb</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Miscellaneous'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#556B2F] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#556B2F] hover:text-white transition hover:scale-110"
              }>Miscellaneous</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Pasta'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#FF6347] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#FF6347] hover:text-white transition hover:scale-110"
              }>Pasta</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Pork'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#E2725B] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#E2725B] hover:text-white transition hover:scale-110"
              }>Pork</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Seafood'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#4ac8bb] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#4ac8bb] hover:text-white transition hover:scale-110"
              }>Seafood</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Side'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#B0C4DE] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#B0C4DE] hover:text-white transition hover:scale-110"
              }>Side</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Starter'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#ffc089] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#ffc089] hover:text-white transition hover:scale-110"
              }>Starter</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Vegan'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#5cc25c] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#5cc25c] hover:text-white transition hover:scale-110"
              }>Vegan</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Vegetarian'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#88B04B] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#88B04B] hover:text-white transition hover:scale-110"
              }>Vegetarian</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Breakfast'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#FFA07A] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#FFA07A] hover:text-white transition hover:scale-110"
              }>Breakfast</NavLink>

                <NavLink onClick={()=>emptySearch()} to={'/category/Goat'}  className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "bg-[#708090] border px-5 py-1 rounded text-white transition scale-110" : "border px-5 py-1 rounded hover:bg-[#708090] hover:text-white transition hover:scale-110"
              }>Goat</NavLink>

              </div>
          </div>   
          <Outlet/>

    </div>
  )
}

export default Home