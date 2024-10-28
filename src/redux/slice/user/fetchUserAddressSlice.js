import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchtUserAddressApi } from "../../api/userApi";

// Async thunk for fetching user details
export const fetchUserAddress = createAsyncThunk(
  "user/fetchUserAdderess",
  async (_, thunkAPI) => {
    try {
      const data = await fetchtUserAddressApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Failed to fetch user address" }
      );
    }
  }
);

const fetchUserAddressSlice = createSlice({
  name: "fetchUserAddress",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUser } = fetchUserAddressSlice.actions;
export default fetchUserAddressSlice.reducer;
