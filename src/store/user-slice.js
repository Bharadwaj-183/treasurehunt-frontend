import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const response = await fetch("https://treasurehunt-back.vercel.app/demo", {
      method: "GET",
    });
    const data = await response.text();
    console.log("fetch all users type", typeof JSON.parse(data));
    return JSON.parse(data);
  }
);
// FetchAllUsers();
const userSlice = createSlice({
  initialState: [
    {
      userId: "bharadwaj",
      password: "1234567",
      stage1Time: 0,
      stage2Time: 0,
      stage3Time: 0,
      stage4Time: 0,
      stage5Time: 0,
      stage1Points: 0,
      stage2Points: 0,
      stage3Points: 0,
      stage4Points: 0,
      stage5Points: 0,
      overallPoints: 0,
    },
  ],
  name: "user",
  reducers: {
    setUser(state, action) {
      state.push(action.payload);
    },
    setStage1Time(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage1Time = action.payload.time;
    },
    setStage2Time(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage2Time = action.payload.time;
    },
    setStage3Time(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage3Time = action.payload.time;
    },
    setStage4Time(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage4Time = action.payload.time;
    },
    setStage5Time(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage5Time = action.payload.time;
    },

    setStage1Points(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage1Points = action.payload.points;
    },
    setStage2Points(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage2Points = action.payload.points;
    },
    setStage3Points(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage3Points = action.payload.points;
    },
    setStage4Points(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage4Points = action.payload.points;
    },
    setStage5Points(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.stage5Points = action.payload.points;
    },

    setOverallPoints(state, action) {
      const foundUser = state.find(
        (item) => item.userId === action.payload.userId
      );
      foundUser.overallPoints = action.payload.points;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      // state = action.payload;
      const obj = action.payload;
      console.log("payload", obj);
      const array = [];
      obj.map((item) => {
        array.push(item);
        return;
      });
      return obj;
    });
  },
});

export default userSlice;
export const userActions = userSlice.actions;
