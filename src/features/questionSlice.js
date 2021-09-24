import { createSlice } from "@reduxjs/toolkit";
import uniqueRandomArray from "unique-random-array";
import _ from "lodash";

const initialState = {
  allCountries: null,
  randomCountries: null,
  correct: null,
  answers: null,
  answerCounter: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    getAllCountries: (state, action) => {
      // Get all Countries
      state.allCountries = action.payload;
    },

    getRandomCountries: (state, action) => {
      // Set random 4 Countries
      const random = uniqueRandomArray(state.allCountries);

      const randomCountries = {
        0: random(),
        1: random(),
        2: random(),
        3: random(),
      };

      state.randomCountries = randomCountries;

      // set Correct answer and all answers
      state.correct = state.randomCountries[0].name.common;

      const setAnswersObjects = Object.values(state.randomCountries).map(
        (country, i) => {
          return {
            countryName: country.name.common,
            isCorrect: i === 0 ? true : false,
          };
        }
      );

      state.answers = _.shuffle(setAnswersObjects);
    },

    setAnswerCounter: (state, action) => {
      state.answerCounter = state.answerCounter + 1;
    },
    resetAnswerCounter: (state, action) => {
      state.answerCounter = 0;
    },
  },
});

export const {
  getAllCountries,
  getRandomCountries,
  setAnswerCounter,
  resetAnswerCounter,
} = questionSlice.actions;
export default questionSlice.reducer;
