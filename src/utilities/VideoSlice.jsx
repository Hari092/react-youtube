import { createSlice } from "@reduxjs/toolkit";

const mainVideo=createSlice({
    name:"mainVideo",
    initialState:{
        videoContainer:[]
    },
    reducers:{
        setVideo:(state,action)=>{
            state.videoContainer=action.payload
        },
    }
})

export const {setVideo}=mainVideo.actions;
export default mainVideo.reducer;