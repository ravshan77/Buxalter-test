import { createSlice } from "@reduxjs/toolkit";
import { CARDS_DATA } from "../constants";

export const rootDataReducer = createSlice({
  name: "rootDataReducer",
  initialState: {
    alloptions: {},
    tableData: {},
    isGetter:{
      [CARDS_DATA]: false,
    },
  },
  reducers: {
    setTablesData: (state, { payload }) => {
      state.tableData[payload?.key] = payload?.data;
    },
    setAllOptionsData: (state, { payload }) => {
      state.alloptions = { ...state.alloptions, ...payload };
    },
    setIsGetter: (state, { payload }) => {
      state.isGetter[payload?.key] = !state.isGetter[payload?.key];
    },
  },
});

export const {
  setTablesData,
  setAllOptionsData,
  setIsGetter,
} = rootDataReducer.actions;

export default rootDataReducer.reducer;
