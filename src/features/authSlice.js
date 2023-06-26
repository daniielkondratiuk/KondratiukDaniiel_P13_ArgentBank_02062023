import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const {token} = action.payload
            state.token = token
        },
        logout: (state) => {
            state.token = null
        }
    },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state) => state.login.user
export const selectToken = (state) => state.login.token
