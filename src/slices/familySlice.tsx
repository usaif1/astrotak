//dependencies
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { familyApi } from "api/family";

type InitialState = {
  members: any[];
  loading: boolean;
};

export const fetchFamily = createAsyncThunk("family/fetchAllMembers", async () => {
  const response = await familyApi.get("/relative/all");
  return response.data;
});

const initialState: InitialState = {
  members: [],
  loading: true,
};

export const familySlice = createSlice({
  name: "family",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFamily.fulfilled, (state, action) => {
      console.log(action.payload.data, "in builder");
      state.members = action.payload.data.allRelatives;
      state.loading = false;
    });
  },
});

export default familySlice.reducer;
