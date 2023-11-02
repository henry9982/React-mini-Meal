import React, { useEffect } from 'react'
import { BiDish, BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setProductForSearch, setSearch } from '../features/services/mealSlice'

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const search = useSelector(state=>state.meals.search)
  const fetchedData = useSelector(state=>state.meals.fetchedData)
  const products = useSelector(state=>state.meals.meals)
  const {pathname} = useLocation()
  const path = pathname.split('/')
  const pathLocation = path[1]

  function filterProducts(products) {
    const searchText = search.toLowerCase()
    return products.length===0?products:products.filter(product=>product.strMeal.toLowerCase().includes(searchText))
  }

  useEffect(()=>{
    dispatch(setProductForSearch(fetchedData))
    const filteredProducts = filterProducts(fetchedData)
    dispatch(setProductForSearch(filteredProducts))

  },[search])  

  return (
    <nav className='flex justify-around p-2 px-5 items-center'>
        <div className='flex items-center gap-2 hover:cursor-pointer' onClick={()=>navigate('/')}>
            <BiDish className='text-4xl text-[#d7258a] hover:scale-[1.2] smooth'/>
            <h1 className='text-2xl hidden sm:block font-poppins font-semibold hover:scale-[1.2] smooth  text-[#F99417]'>Foodie</h1>
        </div>
      {pathLocation==='detail'?'':        <div className='bg-white relative flex items-center px-3 py-2 rounded-3xl   justify-between '>
            <input onChange={(e)=>dispatch(setSearch(e.target.value))} value={search} type="text" className='outline-none w-64 max-[485px]:w-52' placeholder='Search...' />
            <div className='absolute right-1 w-9 h-9 bg-slate-700 flex justify-center items-center rounded-full'>
            <BiSearch className='text-white  text-2xl cursor-pointer'/>

            </div>
        </div>}
    </nav>
  )
}

export default Nav