import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPaymentApi, verifyPaymentApi } from "../api/payment";
import { toast } from "react-toastify";


export const CreatePayment = createAsyncThunk(
  "create",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await createPaymentApi(payload);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const VerifyPayment = createAsyncThunk(
    "verify",
    async (payload, { rejectWithValue }) => {
      try {
        const response = await verifyPaymentApi(payload);
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
        return rejectWithValue(error?.response?.data?.message);
      }
    }
  );