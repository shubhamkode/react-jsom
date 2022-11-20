import { configureStore } from "@reduxjs/toolkit";
import authorReducer from './features/authorSlice'
import postReducer from './features/postSlice'
import authReducer from "./features/authSlice"

const store = configureStore({
    reducer: {
        post: postReducer,
        author: authorReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;