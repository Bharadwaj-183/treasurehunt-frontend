import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
  initialState: { currentUser: "" },
  name: "current",
  reducers: {
    setCurrent(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export default currentSlice;
export const currentActions = currentSlice.actions;
