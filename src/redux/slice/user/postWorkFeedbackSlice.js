import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postWorkFeedbackApi } from "../../api/userApi";

// Thunk to handle updating user profile
export const postWorkFeedback = createAsyncThunk(
  "user/postWorkFeedback",
  async (feedbackData, { rejectWithValue }) => {
    try {
      const data = await postWorkFeedbackApi(feedbackData); // Call the separated API function
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postWorkFeedbackSlice = createSlice({
  name: "postWorkFeedback",
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
      .addCase(postWorkFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postWorkFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(postWorkFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
        state.success = false;
      });
  },
});

export const { resetUpdateStatus } = postWorkFeedbackSlice.actions;

export default postWorkFeedbackSlice.reducer;
