import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedCandidate: null,
};

export const candidateSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    setCandidates: (state, action) => {
      state.list = [...state.list, ...action.payload];
    },
    selectCandidate: (state, action) => {
      state.selectedCandidate = action.payload;
    },
  },
});

export const { setCandidates, selectCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;
