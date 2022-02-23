//dependencies
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type QuestionState = {
  id: number;
  name: string;
  price: number;
  description: string;
  suggestions: string[];
};

type InitialState = {
  questions: QuestionState[];
  loading: boolean;
  category: string;
};

export const fetchQuestions = createAsyncThunk("questions/fetchAll", async () => {
  const response = await axios.get("https://staging-api.astrotak.com/api/question/category/all");
  return response.data;
});

const initialState: InitialState = {
  questions: [],
  loading: true,
  category: "",
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      action.payload.data.forEach((detail: QuestionState) => {
        state.questions.push(detail);
        state.loading = false;
      });
      state.category = action.payload.data[0].name;
    });
  },
});

export const { setCategory } = questionSlice.actions;
export default questionSlice.reducer;
