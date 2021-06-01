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
  answerCounter: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setAnswerCounter: (state, action) => {
      state.answerCounter = state.answerCounter + 1;
    },
    resetAnswerCounter: (state, action) => {
      state.answerCounter = 0;
    },
  },
  extraReducers: {
    [getRandomCountries.fulfilled]: (state, action) => {
      state.randomCountries = action.payload;
      state.correct = action.payload[0].name;

      const setAnswersObjects = Object.values(action.payload).map(
        (country, i) => {
          return {
            countryName: country.name,
            isCorrect: i === 0 ? true : false,
          };
        }
      );

      state.answers = _.shuffle(setAnswersObjects);
    },
  },
});

export const { setAnswerCounter, resetAnswerCounter } = questionSlice.actions;
export default questionSlice.reducer;
