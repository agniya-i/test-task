/* eslint-disable no-promise-executor-return */
/* eslint-disable no-param-reassign */
import { Dispatch, createSlice } from '@reduxjs/toolkit'
import Question from '../../types/Question'

type GameState = {
  questions: Question[]
  error: null | string
  scoreRewards: number[]
  currentQuestionIndex: number
  selectedAnswer: number | null
  isSelectedAnswerCorrect: boolean | null
}

const initialState: GameState = {
  questions: [],
  error: null,
  scoreRewards: [],
  currentQuestionIndex: 0,
  selectedAnswer: null,
  isSelectedAnswerCorrect: null,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    fetchQuestionsSuccess(state, action) {
      state.questions = action.payload
      const availableRewards = []
      for (let i = 0; i < action.payload.length + 1; i += 1) {
        availableRewards.push(i * 500)
      }
      state.scoreRewards = availableRewards
      state.currentQuestionIndex = 11
    },
    fetchQuestionsFail(state, action) {
      state.error = action.payload
    },
    answerQuestion(state, action) {
      const { id } = action.payload
      state.selectedAnswer = id
    },
    checkCorrectAnswer(state, action) {
      const currentQuestion = state.questions[state.currentQuestionIndex]
      const { id } = action.payload
      state.isSelectedAnswerCorrect =
        currentQuestion.correct_answers_ids.includes(id)
    },
    nextQuestion(state) {
      state.selectedAnswer = null
      state.isSelectedAnswerCorrect = null

      state.currentQuestionIndex += 1
    },
    failGame(state) {
      state.selectedAnswer = null
      state.isSelectedAnswerCorrect = null
    },
  },
})

export const {
  fetchQuestionsSuccess,
  fetchQuestionsFail,
  answerQuestion,
  checkCorrectAnswer,
  nextQuestion,
  failGame,
} = gameSlice.actions

const delay = () => new Promise((resolve) => setTimeout(resolve, 500))

export const answerAndCheck =
  (params: { id: number }) => async (dispatch: Dispatch<any>) => {
    dispatch(answerQuestion({ id: params.id }))

    await delay()

    return dispatch(checkCorrectAnswer({ id: params.id }))
  }

export default gameSlice.reducer
