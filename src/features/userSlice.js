import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    createdAt: "",
    updatedAt: ""
}

const userSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getDataProfile: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
        },
        updateDataProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.updatedAt = action.payload.updatedAt
        }
    },
})

export const {getDataProfile, updateDataProfile} = userSlice.actions

export default userSlice.reducer

export const selectUser = (state) => state.profile.firstName
