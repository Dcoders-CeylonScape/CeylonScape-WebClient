import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user-slice.js";
import applicationSlice from "./slices/application-slice.js";
import officerSlice from "./slices/officer-slice.js";
import formReducer from "./slices/visaform-slice.js";

export default configureStore({
  reducer: {
    user: userSlice,
    form: formReducer,
    application: applicationSlice,
    officer: officerSlice
  },
});

