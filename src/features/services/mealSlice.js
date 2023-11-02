import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchedData:[],
    meals:[],
    singleMeal:[],
    search:''
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
        },setSearch(state,action){
            state.search = action.payload
        },setProductForSearch(state,action){
            state.meals = action.payload
        }
    }
})

export const {setMeals,setSingleMealDetail,setSearch,setProductForSearch} = mealSlice.actions
export default mealSlice.reducer