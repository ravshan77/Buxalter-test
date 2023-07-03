import { createSlice } from "@reduxjs/toolkit";

export const rootDataReducer = createSlice({
  name: "rootDataReducer",
  initialState: {
    alloptions: {},
    tableData: {},
  },
  reducers: {
    setTablesData: (state, { payload }) => {
      state.tableData[payload?.key] = payload?.data;
    },
    setAllOptionsData: (state, { payload }) => {
      state.alloptions = { ...state.alloptions, ...payload };
    },
  },
});

export const {
  setTablesData,
  setAllOptionsData,
} = rootDataReducer.actions;

export default rootDataReducer.reducer;
