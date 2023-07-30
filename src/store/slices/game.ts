/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [],
  error: null,
  score: 0, // todo
  currentQuectionsIndex: 0,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    fetchQuestionsSuccess(state, action) {
      state.questions = action.payload
      state.score = 0
      state.currentQuectionsIndex = 0
    },
    fetchQuestionsFail(state, action) {
      state.error = action.payload
    },
    answerQuestion(state, action) {
      const currentQuestion = state.questions[state.currentQuectionsIndex]
      state.score +=
        action.payload.answer === currentQuestion.correct_answer ? 1 : 0
    },
    nextQuestion(state, action) {
      state.currentQuectionsIndex += 1
    },
  },
})

export const {
  fetchQuestionsSuccess,
  fetchQuestionsFail,
  answerQuestion,
  nextQuestion,
} = gameSlice.actions

export default gameSlice.reducer
