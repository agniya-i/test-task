/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import AnswerOption from '../../types/AnswerOption'
import Question from '../../types/Question'

type GameState = {
  questions: Question[]
  error: null | string
  scoreRewards: number[]
  currentQuestionIndex: number
}

const initialState: GameState = {
  questions: [],
  error: null,
  scoreRewards: [],
  currentQuestionIndex: 0,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    fetchQuestionsSuccess(state, action) {
      state.questions = action.payload
      const availableRewards = action.payload.map(
        (item: AnswerOption, index: number) => index * 500
      )
      state.scoreRewards = availableRewards
      state.currentQuestionIndex = 5
    },
    fetchQuestionsFail(state, action) {
      state.error = action.payload
    },
    // answerQuestion(state, action) {
    //   const currentQuestion = state.questions[state.currentQuestionIndex]
    //   state.score +=
    //     action.payload.answer === currentQuestion.correct_answer ? 1 : 0
    // },
    nextQuestion(state) {
      state.currentQuestionIndex += 1
    },
  },
})

export const {
  fetchQuestionsSuccess,
  fetchQuestionsFail,
  // answerQuestion,
  nextQuestion,
} = gameSlice.actions

export default gameSlice.reducer
