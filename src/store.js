import { configureStore } from "@reduxjs/toolkit";
import DatesReducer from "./datesSlice";

export const store = configureStore({
    reducer: {
        dates: DatesReducer
    }
})