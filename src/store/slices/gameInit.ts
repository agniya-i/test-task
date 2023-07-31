/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import GameStage from '../../types/GameStage'
import { fetchQuestionsSuccess, fetchQuestionsFail, failGame } from './game'

const initialState = {
  stage: GameStage.StartGame,
}

const gameStage = createSlice({
  name: 'gameStage',
  initialState,
  reducers: {
    startGame(state) {
      state.stage = GameStage.FetchingGame
    },
    finishGame(state) {
      state.stage = GameStage.FinishGame
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsSuccess, (state) => {
        state.stage = GameStage.Game
      })
      .addCase(fetchQuestionsFail, (state) => {
        state.stage = GameStage.StartGame
      })
      .addCase(failGame, (state) => {
        state.stage = GameStage.FinishGame
      })
  },
})

export const { startGame, finishGame } = gameStage.actions

export default gameStage.reducer
