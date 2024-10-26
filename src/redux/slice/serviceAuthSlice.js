import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serviceRegister } from "../api/auth";
import { toast } from "react-toastify";


export const serviceAuthRegister = createAsyncThunk(
  "servicereg",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await serviceRegister(payload);
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

const serviceAuthSlice = createSlice({
  name: "authservice",
  initialState,
  reducers: {
    serviceSignout: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(serviceAuthRegister.pending, (state) => {
        console.log("pending");
        state.status = "loading";
        state.error = null;
      })
      .addCase(serviceAuthRegister.fulfilled, (state, action) => {
        console.log("success", action.payload);
        state.status = "success";
        state.data = action.payload;
        localStorage.setItem("isSrviceAuthenticated", JSON.stringify(true));
        localStorage.setItem("service_access_token", action.payload.token);
      })
      .addCase(serviceAuthRegister.rejected, (state, action) => {
        console.log("failed");
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export const { serviceSignout } = serviceAuthSlice.actions;
export default serviceAuthSlice.reducer;
