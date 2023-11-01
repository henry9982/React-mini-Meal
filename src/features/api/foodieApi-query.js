import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const  foodieApi = createApi({
    reducerPath:"foodieApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://www.themealdb.com/api/json/v1/1/"}),
    endpoints:(builder)=>({
        getAllMeals:builder.query({
            query:()=>'search.php?s='
        }),
        getMealsByCategory:builder.query({
            query:(payload)=>`filter.php?c=${payload}`
        }),
        getMealDetail:builder.query({
            query:(payload)=>`lookup.php?i=${payload}`
        })
    })
})

export const {useGetAllMealsQuery,useGetMealsByCategoryQuery,useGetMealDetailQuery} = foodieApi