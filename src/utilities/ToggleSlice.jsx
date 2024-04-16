import { createSlice } from "@reduxjs/toolkit";

const toggle = createSlice({
  name: "toggle",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    sideBarOpen: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    sideBarClose:(state)=>{
      state.isSideBarOpen=false;
    }
  },
});

export const { sideBarOpen ,sideBarClose} = toggle.actions;

export default toggle.reducer;
