import { createSlice } from "@reduxjs/toolkit";

const initialState={
   blog:{}
};


export const blogSlice = createSlice({
    name:"blog",
    initialState,

    reducers:{
        setBlog:(state, action)=>{
            state.blog= action.payload
        },
    }
})


export const { setBlog } = blogSlice.actions

export default blogSlice.reducer