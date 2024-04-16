import { createSlice } from "@reduxjs/toolkit";
import { liveChatLimits } from "./constants";
const liveSlice = createSlice({
  name: "live",
  initialState: {
    liveContainer: [],
  },
  reducers: {
    addLive: (state, action) => {
      state.liveContainer.splice(liveChatLimits,1)
      state.liveContainer.unshift(action.payload);
    },
  },
});

export default liveSlice.reducer;
export const { addLive } = liveSlice.actions;
