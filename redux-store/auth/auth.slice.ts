import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IauthState } from "./auth.types";
import axiosInstance from "@/config/axios";
import { QA_TOKEN } from "@/utils/constants";

const initialState: IauthState = {
  user: {
    id: 0,
    email: "",
    password: "",
    fullName: "",
    isAdmin: false,
  },
  error: {},
  isActivityInProcess: false,
  loginSuccessMesssage: "",
  isValidTokenMessage: "",
};

//verify-Token
export const verifyToken = createAsyncThunk(
  "verify/token",
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get("/auth/verify-token");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  },
);

// user Sign In

export const loginUser = createAsyncThunk(
  "login/user",
  async (userDetails: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().post("/user/login", userDetails);
      localStorage.setItem(QA_TOKEN, data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  },
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: { ...initialState, name: "authInitialState" },
  reducers: {
    errorCleanUp: (state) => {
      state.error = {
        code: null,
        message: "",
        error: "",
      };
    },
    messageCleanUp: (state) => {
      state.loginSuccessMesssage = "";
    },
    tokenCleaner: (state) => {
      state.isValidTokenMessage = "";
    },
  },
  extraReducers: (builder) => {
    //verify-token
    builder
      .addCase(verifyToken.pending, (state, action: any) => {
        state.isActivityInProcess = true;
      })

      .addCase(verifyToken.rejected, (state, action: any) => {
        state.isActivityInProcess = false;
        state.isValidTokenMessage = action.payload.isValid;
        state.error = {
          code: action.payload.status,
          message: action.payload.data.message,
        };
      })

      .addCase(verifyToken.fulfilled, (state, action: any) => {
        state.isActivityInProcess = false;
        state.isValidTokenMessage = action.payload.message;
      });

    //loginUser
    builder
      .addCase(loginUser.pending, (state, action: any) => {
        state.isActivityInProcess = true;
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.isActivityInProcess = false;
        state.error = {
          code: action.payload.status,
          message: action.payload.data.message,
        };
      })
      .addCase(loginUser.fulfilled, (state, action: any) => {
        state.isActivityInProcess = false;
        state.loginSuccessMesssage = action.payload.message;
        state.user = action.payload.userDetails;
      });
  },
});
export const { errorCleanUp, messageCleanUp, tokenCleaner } = authSlice.actions;

export default authSlice.reducer;
