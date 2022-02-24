//dependencies
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { familyApi } from "api/family";

type InitialState = {
  members: any[];
  loading: boolean;
  showForm: boolean;
  locations: any[];
  loadingLocations: boolean;
};

//fetch relatives
export const fetchFamily = createAsyncThunk("family/fetchAllMembers", async () => {
  const response = await familyApi.get("/relative/all");
  return response.data;
});

//add family
export const addFamilyMember = createAsyncThunk("family/fetchAllMembers", async (body: any) => {
  try {
    await familyApi.post("/relative", {
      ...body,
    });
  } catch (err) {
    console.log(err);
  }
});

const initialState: InitialState = {
  members: [],
  loading: true,
  showForm: false,
  locations: [],
  loadingLocations: false,
};

export const familySlice = createSlice({
  name: "family",
  initialState,
  reducers: {
    openForm: (state) => {
      state.showForm = true;
    },
    closeForm: (state) => {
      state.showForm = false;
    },
    showLoader: (state) => {
      state.loadingLocations = true;
    },
    updateLocations: (state, action) => {
      if (action.payload) state.locations = action.payload;
      else state.locations = [];
      state.loadingLocations = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFamily.fulfilled, (state, action) => {
      if (action.payload.data?.allRelatives) {
        state.members = action.payload.data?.allRelatives;
      }
      state.loading = false;
    });
  },
});

export const { openForm, closeForm, updateLocations, showLoader } = familySlice.actions;
export default familySlice.reducer;
