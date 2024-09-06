import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./slices/user-slice.js";
import applicationSlice from "./slices/application-slice.js";
import officerSlice from "./slices/officer-slice.js";

export default configureStore({
    reducer: {
        user: userSlice,
        application: applicationSlice,
        officer: officerSlice
    }
})