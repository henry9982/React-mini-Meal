import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { useGetMealsByCategoryQuery } from '../features/api/foodieApi-query'
import { setMeals } from '../features/services/mealSlice'
import Card from '../components/Card'

const MealsByCategory = () => {
    const location  = useLocation()
    console.log(location);
    const categories = ['Beef','Chicken','Dessert','Lamb','Miscellaneous','Pasta','Pork','Seafood','Side','Starter','Vegan','Vegetarian','Breakfast','Goat']
    const {id} = useParams()
    const dispatch = useDispatch()
    const {data,error,isLoading} = useGetMealsByCategoryQuery(id)
    console.log(data,error,isLoading);
  
    const mealsDataSetting = (data)=>{
      dispatch(setMeals(data))
    }
  
    useEffect(()=>{
      data&&mealsDataSetting(data?.meals)
    },[data])
  
    const mealsData = useSelector(state=>state.meals)
    console.log(mealsData);

    if (categories.find(category=>category===id)) {
        return (
            <div className='cart-Container p-3 flex flex-wrap gap-10 justify-center items-center'>
                {mealsData.meals.length>0?mealsData.meals.map(meal=><Card meal={meal} key={meal.idMeal}/>):<div>Loading ...</div>}
            </div>
          )
    }else{
       return  <Navigate to={'/'}/>
    }

}

export default MealsByCategory