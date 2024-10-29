import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addUpdateUserAddressApi } from "../../api/userApi";

// Thunk to handle updating user profile
export const updateUserAddress = createAsyncThunk(
  "user/updateUserAddress",
  async (addressData, { rejectWithValue }) => {
    try {
      const data = await addUpdateUserAddressApi(addressData); // Call the separated API function
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const updateUserAddressSlice = createSlice({
  name: "updateUserAddress",
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
      .addCase(updateUserAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(updateUserAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
        state.success = false;
      });
  },
});

export const { resetUpdateStatus } = updateUserAddressSlice.actions;

export default updateUserAddressSlice.reducer;
