import { createSlice } from "@reduxjs/toolkit";
import { questionsWithAnswers } from "../../lib/questionsWithAnswers";

const initialState = {
  questionsWithAnswers,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
});

export default questionsSlice.reducer;
