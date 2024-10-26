import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../api/auth";
import { toast } from "react-toastify";

export const AuthUser = createAsyncThunk(
  "userlogin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userLogin(payload);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const AuthRegister = createAsyncThunk(
  "userreg",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await userRegister(payload);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

const initialState = {
  status: "idle",
  error: null,
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSignout: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthUser.pending, (state) => {
        console.log("pending");
        state.status = "loading";
        state.error = null;
      })
      .addCase(AuthUser.fulfilled, (state, action) => {
        console.log("success", action.payload);
        state.status = "success";
        state.data = action.payload;
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        localStorage.setItem("access_token", action.payload.token);
      })
      .addCase(AuthUser.rejected, (state, action) => {
        console.log("failed");
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(AuthRegister.pending, (state) => {
        console.log("pending");
        state.status = "loading";
        state.error = null;
      })
      .addCase(AuthRegister.fulfilled, (state, action) => {
        console.log("success", action.payload);
        state.status = "success";
        state.data = action.payload;
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        localStorage.setItem("access_token", action.payload.token);
      })
      .addCase(AuthRegister.rejected, (state, action) => {
        console.log("failed");
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { userSignout } = authSlice.actions;
export default authSlice.reducer;
