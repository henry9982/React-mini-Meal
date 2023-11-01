import { configureStore } from "@reduxjs/toolkit";
import { foodieApi } from "./api/foodieApi-query";
import mealSlice from "./services/mealSlice";

export const store = configureStore({
    reducer:{
        [foodieApi.reducerPath]:foodieApi.reducer,
        meals:mealSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodieApi.middleware),
})