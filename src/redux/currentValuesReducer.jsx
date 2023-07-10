import { createSlice } from "@reduxjs/toolkit";

export const currentValuesReducer = createSlice({
  name: "valueReducer",
  initialState: {
    currentValues: {},
    currentCardData:{}
  },
  reducers: {
    setCurrentValues: (state, { payload }) => {
      state.currentValues = { ...payload };
    },
    setCurrentCardData: (state, { payload }) => {
      state.currentCardData = { ...payload };
    }
  },
});

export const { setCurrentValues, setCurrentCardData } = currentValuesReducer.actions;

export default currentValuesReducer.reducer;
