import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: 'search',
    initialState: {
        searchVal:[]
    },
    reducers: {
        setSearchVal:(state,action)=>{
            state.searchVal=action.payload;
        },
    }
})

export const { setSearchVal } = search.actions;
export default search.reducer;