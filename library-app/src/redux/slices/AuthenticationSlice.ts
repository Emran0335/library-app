import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginUserPayload, RegisterUserPayload, User } from "../../models/User";

interface AuthenticationSliceState {
  registeredUser: User | undefined;
  loggedInUser: User | undefined;
  loading: boolean;
  error: boolean;
  registerSuccess: boolean;
}

const initialState: AuthenticationSliceState = {
  registeredUser: undefined,
  loggedInUser: undefined,
  loading: false,
  error: false,
  registerSuccess: false,
};

// register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: RegisterUserPayload, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:5000/auth/register", user);
      return req.data.user;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

// login user
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
  reducers: {},

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
    // resolved logic
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        registerSuccess: true,
        registeredUser: action.payload,
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
      };
      return state;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state = {
        ...state,
        error: true,
      };
      return state;
    });
  },
});

export const {} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
