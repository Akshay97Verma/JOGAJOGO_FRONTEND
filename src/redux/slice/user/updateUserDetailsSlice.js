// src/redux/slice/user/updateUserSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserApi } from "../../api/userApi";

// Thunk to handle updating user profile
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (updatedData, { rejectWithValue }) => {
    try {
      const data = await updateUserApi(updatedData); // Call the separated API function
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const updateUserSlice = createSlice({
  name: "updateUser",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetUpdateStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
        state.success = false;
      });
  },
});

export const { resetUpdateStatus } = updateUserSlice.actions;

export default updateUserSlice.reducer;
