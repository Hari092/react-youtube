import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./ToggleSlice";
import mainVideoReducer from "./VideoSlice";
import searchReducer from "./SearchSlice";
import commentReducer from "./CommentSlice";
import liveReducer from "./LiveSlice";
import userSlice from "./userSlice";

const store=configureStore({
    reducer:{
        toggle: toggleReducer,
        video:mainVideoReducer,
        search:searchReducer,
        comment:commentReducer,
        live:liveReducer,
        user:userSlice,
  },
})
export default store;