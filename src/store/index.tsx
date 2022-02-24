//imports
import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "slices/questionSlice";
import familySliceReducer from "slices/familySlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    family: familySliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
