import { createSlice } from "@reduxjs/toolkit";

export const currentValuesReducer = createSlice({
  name: "valueReducer",
  initialState: {
    currentValues: {},
  },
  reducers: {
    setCurrentValues: (state, { payload }) => {
      state.currentValues = { ...payload };
    },
  },
});

export const { setCurrentValues } = currentValuesReducer.actions;

export default currentValuesReducer.reducer;
