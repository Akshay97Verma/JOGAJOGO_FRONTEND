import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserFeedbackApi } from "../../api/userApi";

// Async thunk for fetching user details
export const fetchUserFeedback = createAsyncThunk(
  "user/fetchUserFeedback",
  async (_, thunkAPI) => {
    try {
      const data = await fetchUserFeedbackApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Failed to fetch user address" }
      );
    }
  }
);

const fetchUserFeedbackSlice = createSlice({
  name: "fetchUserFeedback",
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
      .addCase(fetchUserFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUser } = fetchUserFeedbackSlice.actions;
export default fetchUserFeedbackSlice.reducer;
