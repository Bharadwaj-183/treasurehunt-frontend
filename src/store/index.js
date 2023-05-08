import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import currentSlice from "./current-slice";
const store = configureStore({
  reducer: { user: userSlice.reducer, current: currentSlice.reducer },
});

export default store;
