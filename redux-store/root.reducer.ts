import { combineReducers } from "@reduxjs/toolkit";

//importing slices
import authSlice from "./auth/auth.slice";
import formSlice from "./form/form.slice";

export const rootReducer = combineReducers({
  authReducer: authSlice,
  formReducer: formSlice,
});
