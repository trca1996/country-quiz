import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uniqueRandomArray from "unique-random-array";
import _ from "lodash";

export const getRandomCountries = createAsyncThunk(
  "allCountries/getAllCountries",
  async () => {
    const response = await fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;capital;flag"
    );

    const data = await response.json();

    const random = uniqueRandomArray(data);

    const randomCountries = {
      0: random(),
      1: random(),
      2: random(),
      3: random(),
    };

    return randomCountries;
  }
);

const initialState = {
  randomCountries: null,
  correct: null,
  answers: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: {
    [getRandomCountries.fulfilled]: (state, action) => {
      state.randomCountries = action.payload;
      state.correct = action.payload[0].name;
      state.answers = _.shuffle(action.payload).map((item) => item.name);
    },
  },
});

// export const {} = questionSlice.actions;
export default questionSlice.reducer;
