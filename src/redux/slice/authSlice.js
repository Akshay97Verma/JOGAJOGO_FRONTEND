import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../api/auth";
import { toast } from "react-toastify";

// AsyncThunk for user login
export const AuthUser = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userLogin(payload);
      return response.data; // Assuming response contains { token, user }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// AsyncThunk for user registration
export const AuthRegister = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userRegister(payload);
      return response.data; // Assuming response contains { token, user }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Registration failed. Please try again.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// Initial state
const initialState = {
  status: "idle", // 'idle' | 'loading' | 'success' | 'failed'
  error: null,
  data: null, // Stores user data
};

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSignout: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("access_token");
    },
  },
  extraReducers: (builder) => {
    builder
      // AuthUser Thunks
      .addCase(AuthUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AuthUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        localStorage.setItem("access_token", action.payload.token);
      })
      .addCase(AuthUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // AuthRegister Thunks
      .addCase(AuthRegister.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AuthRegister.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        localStorage.setItem("access_token", action.payload.token);
      })
      .addCase(AuthRegister.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Exporting actions and reducer
export const { userSignout } = authSlice.actions;
export default authSlice.reducer;
