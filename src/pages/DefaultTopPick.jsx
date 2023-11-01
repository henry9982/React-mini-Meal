import React, { useEffect } from 'react'
import { useGetAllMealsQuery } from '../features/api/foodieApi-query';
import { useDispatch, useSelector } from 'react-redux';
import { setMeals } from '../features/services/mealSlice';
import Card from '../components/Card';
import { useLocation } from 'react-router-dom';

const DefaultTopPick = () => {
    const location= useLocation()
    console.log(location);
    const dispatch = useDispatch()
    const {data,error,isLoading} = useGetAllMealsQuery()
    console.log(data,error,isLoading);
  
    const mealsDataSetting = (data)=>{
      dispatch(setMeals(data))
    }
  
    useEffect(()=>{
      data&&mealsDataSetting(data?.meals)
    },[data])
  
    const mealsData = useSelector(state=>state.meals)
    console.log(mealsData);
  return (
    <div className='flex flex-wrap gap-8 justify-center items-center'>
        {mealsData.meals.length>0?mealsData.meals.map(meal=><Card meal={meal} key={meal.idMeal} isDefault={true}/>):<div>Loading ...</div>}
    </div>
  )
}

export default DefaultTopPick