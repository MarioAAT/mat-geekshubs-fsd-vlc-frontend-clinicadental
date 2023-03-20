
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../layouts/userSlice';
import detailSlice from '../layouts/detailSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        detail: detailSlice
    }
    
});