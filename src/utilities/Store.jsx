import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./ToggleSlice";
import mainVideoReducer from "./VideoSlice";
import searchReducer from "./SearchSlice";
import commentReducer from "./CommentSlice";
import liveReducer from "./LiveSlice";

const store=configureStore({
    reducer:{
        toggle: toggleReducer,
        video:mainVideoReducer,
        search:searchReducer,
        comment:commentReducer,
        live:liveReducer,
  },
})
export default store;