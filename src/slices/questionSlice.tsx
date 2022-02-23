//dependencies
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type QuestionState = {
  id: number;
  name: string;
  price: number;
  description: string;
  suggestions: string;
};

type InitialState = {
  questions: QuestionState[];
  loading: boolean;
};

export const fetchQuestions = createAsyncThunk("questions/fetchAll", async () => {
  const response = await axios.get("https://staging-api.astrotak.com/api/question/category/all");
  return response.data;
});

const initialState: InitialState = {
  questions: [],
  loading: true,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      action.payload.data.forEach((detail: QuestionState) => {
        state.questions.push(detail);
        state.loading = false;
      });
    });
  },
});

export const {} = questionSlice.actions;
export default questionSlice.reducer;
