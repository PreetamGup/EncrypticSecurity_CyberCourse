import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import blogSlice from "./features/blogSlice";

export const store= configureStore({
    reducer:{
        user:userSlice,
        blog:blogSlice
    },

})