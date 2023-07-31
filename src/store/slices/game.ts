/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import AnswerOption from '../../types/AnswerOption'
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
      const availableRewards = action.payload.map(
        (item: AnswerOption, index: number) => (index + 1) * 500
      )
      state.scoreRewards = availableRewards
      state.currentQuestionIndex = 0
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

export const answerAndCheck = (params: any) => async (dispatch: any) => {
  await dispatch(answerQuestion({ id: params.id }))
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => setTimeout(resolve, 500))

  // eslint-disable-next-line @typescript-eslint/return-await
  return await dispatch(checkCorrectAnswer({ id: params.id }))

  // return await dispatch(nextQuestion())
}
export default gameSlice.reducer
