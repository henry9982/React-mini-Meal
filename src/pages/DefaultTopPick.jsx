import React, { useEffect } from 'react'
import { useGetAllMealsQuery } from '../features/api/foodieApi-query';
import { useDispatch, useSelector } from 'react-redux';
import { setMeals, setProductForSearch } from '../features/services/mealSlice';
import Card from '../components/Card';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import {MdNoMealsOuline} from 'react-icons/md'

const DefaultTopPick = () => {
    const location= useLocation()
    const dispatch = useDispatch()
    const {data,error,isLoading} = useGetAllMealsQuery()
  
    const mealsDataSetting = (data)=>{
      dispatch(setMeals(data))
    }
  
    useEffect(()=>{
      data&&mealsDataSetting(data?.meals)
    },[data])
  
    const mealsData = useSelector(state=>state.meals)
    
  return (
    <div className='flex flex-wrap gap-8 max-[485px]:gap-4 justify-center items-center'>
        {isLoading?<Loader/>:mealsData.meals.length>0?mealsData.meals.map(meal=><Card meal={meal} key={meal.idMeal} isDefault={true}/>):<div className='flex items-center gap-2 my-10'> <div className='text-2xl font-poppins' >No Meals Found</div> <MdNoMealsOuline className='text-2xl font-poppins' /> </div>}
    </div>
  )
}

export default DefaultTopPick