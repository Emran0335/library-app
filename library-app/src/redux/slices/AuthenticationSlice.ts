import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  LoginUserPayload,
  RegisterUserPayload,
  User,
} from "../../models/User";

import axios from "axios";

interface AuthenticationsSliceState {
  loggedInUser: User | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthenticationsSliceState = {
  loggedInUser: undefined,
  loading: false,
  error: false,
  registerSuccess: false,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: RegisterUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:5000/auth/register", user);
      return req.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);


export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: LoginUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:5000/auth/login", user);
      return req.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);


export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    resetRegisterSuccess(state) {
      state = {
        ...state,
        registerSuccess: false,
      };
      return state;
    },
  },
  extraReducers: (builder) => {
    // pending logic
    builder.addCase(registerUser.pending, (state) => {
      state = {
        ...state,
        error: false,
        loading: true,
      };
      return state;
    });
    builder.addCase(loginUser.pending, (state) => {
      state = {
        ...state,
        error: false,
        loading: true,
      };
      return state;
    });
    // fulfilled logic or Resolved logic
    builder.addCase(registerUser.fulfilled, (state) => {
      state = {
        ...state,
        loading: false,
        registerSuccess: true,
      };
      return state;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loggedInUser: action.payload,
        loading: false,
      };
      return state;
    });
    // rejected logic
    builder.addCase(registerUser.rejected, (state) => {
      state = {
        ...state,
        error: true,
        loading: false,
      };
      return state;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state = {
        ...state,
        error: true,
        loading: false
      };
      return state;
    });
  },
});

export const { resetRegisterSuccess } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
