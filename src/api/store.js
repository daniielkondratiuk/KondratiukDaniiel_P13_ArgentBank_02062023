import {configureStore} from "@reduxjs/toolkit"
import authSlice from '../features/authSlice'
import userSlice from "../features/userSlice"

const store = configureStore({
    reducer: {
        login: authSlice,
        profile: userSlice,
    }
})

export default store
