import { createSlice } from '@reduxjs/toolkit';

const datesSlice = createSlice({
    name: "dates",
    initialState: {
        value: []
    },
    reducers: {
        addDate: (state) => {
            state.value = state.value.concat(new Date());
        }
    }
})

export const { addDate } = datesSlice.actions;

export default datesSlice.reducer;