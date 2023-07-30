import { combineReducers } from 'redux'
import gameState from './slices/gameInit'
import game from './slices/game'

export default combineReducers({ gameState, game })
