import { createSlice } from "@reduxjs/toolkit";  

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        choosenProfile : {}
    },
    reducers: {
        addChoosenProfile: (state, action) => {
            return {
                ...state,
                ...action.payload
            } 
        },
    }
})

export const { addChoosenProfile } = profileSlice.actions;

export const profileData = (state) => state.profile;

export default profileSlice.reducer;