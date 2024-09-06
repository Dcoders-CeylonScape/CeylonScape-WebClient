import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user-slice.js";
import formReducer from "./slices/visaform-slice.js";

export default configureStore({
  reducer: {
    user: userSlice,
    form: formReducer,
  },
});
