import { configureStore } from "@reduxjs/toolkit";
import authorReducer from './features/authorSlice'
import postReducer from './features/postSlice'

const store = configureStore({
    reducer: {
        post: postReducer,
        author: authorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;