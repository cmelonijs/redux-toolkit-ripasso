import { configureStore } from "@reduxjs/toolkit";
import datesReducer from "./datesSlice";

export const store = configureStore({
    reducer: {
        dates: datesReducer
    }
})