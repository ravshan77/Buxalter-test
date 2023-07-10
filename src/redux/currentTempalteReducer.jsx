import { createSlice } from "@reduxjs/toolkit";

export const currentTempalteReducer = createSlice({
  name: "currentTempalteReducer",
  initialState: {
    currentTemplate: {}, 
  },
  reducers: {
    setCurrentTemplate: (state, { payload }) => {
      state.currentTemplate = { ...payload };
    },
    toggleTemplateModal: (state, { payload }) => {
      state.currentTemplate.isOpenModal = payload
    }
  },
});

export const {
  setCurrentTemplate,
  toggleTemplateModal,
} = currentTempalteReducer.actions;

export default currentTempalteReducer.reducer;
