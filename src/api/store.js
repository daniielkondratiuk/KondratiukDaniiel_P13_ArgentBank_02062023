import {configureStore} from "@reduxjs/toolkit"
import authSlice from '../features/authSlice'

const store = configureStore({
    reducer: {
        login: authSlice,
    }
})

export default store
