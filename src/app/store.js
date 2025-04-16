import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidates/candidateSlice";

export const store = configureStore({
  reducer: {
    candidates: candidateReducer,
  },
});
