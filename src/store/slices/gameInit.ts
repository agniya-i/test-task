/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import GameStage from '../../types/GameStage'
import { fetchQuestionsSuccess, fetchQuestionsFail } from './game'

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsSuccess, (state) => {
        state.stage = GameStage.Game
      })
      .addCase(fetchQuestionsFail, (state) => {
        state.stage = GameStage.StartGame
      })
  },
})

export const { startGame } = gameStage.actions

export default gameStage.reducer
