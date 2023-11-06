import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{},
    isLoggedIn:false,
};


export const userSlice = createSlice({
    name:"user",
    initialState,

    reducers:{
        setUser:(state, action)=>{
            state.user= action.payload
        },
        setLogin:(state, action)=>{
            state.isLoggedIn= action.payload
        }
    }
})


export const { setUser, setLogin } = userSlice.actions

export default userSlice.reducer