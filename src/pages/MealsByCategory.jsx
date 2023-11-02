import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { useGetMealsByCategoryQuery } from '../features/api/foodieApi-query'
import { setMeals } from '../features/services/mealSlice'
import Card from '../components/Card'
import Loader from '../Loader/Loader'

const MealsByCategory = () => {
    const location  = useLocation()
    const categories = ['Beef','Chicken','Dessert','Lamb','Miscellaneous','Pasta','Pork','Seafood','Side','Starter','Vegan','Vegetarian','Breakfast','Goat']
    const {id} = useParams()
    const dispatch = useDispatch()
    const {data,error,isLoading} = useGetMealsByCategoryQuery(id)
  
    const mealsDataSetting = (data)=>{
      dispatch(setMeals(data))
    }
  
    useEffect(()=>{
      data&&mealsDataSetting(data?.meals)
    },[data])
  
    const mealsData = useSelector(state=>state.meals)

    if (categories.find(category=>category===id)) {
        return (
            <div className='cart-Container p-3 flex flex-wrap gap-10 justify-center items-center'>
                {isLoading?<Loader/>:mealsData.meals.length>0?mealsData.meals.map(meal=><Card meal={meal} key={meal.idMeal}/>):<div>No Meals Found</div>}
            </div>
          )
    }else{
       return  <Navigate to={'/'}/>
    }

}

export default MealsByCategory