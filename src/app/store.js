import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../features/questionSlice";

export default configureStore({
  reducer: {
    question: questionReducer,
  },
});
