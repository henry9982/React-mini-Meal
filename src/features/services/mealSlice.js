import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchedData:[],
    meals:[],
    singleMeal:[]
}
export const mealSlice = createSlice({
    name:"mealSlice"
    ,initialState,
    reducers:{
        setMeals(state,action){
            state.meals = action.payload
            state.fetchedData = action.payload
        },setSingleMealDetail(state,action){
            state.singleMeal = action.payload
        }
    }
})

export const {setMeals,setSingleMealDetail} = mealSlice.actions
export default mealSlice.reducer