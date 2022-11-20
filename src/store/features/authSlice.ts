import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    user: string | null
}

const user = localStorage.getItem("user");

const initialState: InitialState =  {
    user: user || null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<{
            username: string
            email: string
            password: string
        }>) => {
            const user = JSON.stringify(action.payload);
            state.user = user;
            localStorage.setItem("user", user);
        },
        login: (state, action: PayloadAction<{
            username: string,
            password: string
        }>) => {
            const user = JSON.stringify(action.payload)
            state.user = user;
            localStorage.setItem("user", user)
        },
        logout: (state) => {
            state.user = null
            localStorage.removeItem("user")
        }
    }
})

export default authSlice.reducer;

export const { login, logout, signUp  } = authSlice.actions;