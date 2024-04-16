import {createSlice} from "@reduxjs/toolkit"
const comment =createSlice({
    name:"comment",
    initialState:{
        commentContainer:[]
    },
    reducers:{
        addComment:(state,action)=>{
            state.commentContainer=action.payload;
        }
    }
})

export default comment.reducer;
export const {addComment} = comment.actions;