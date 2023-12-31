import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import './App.css'
import Main from './pages/Main'
import Game from './pages/Game'
import FinishGame from './pages/FinishGame'
import GameStage from './types/GameStage'

function App() {
  const currentStage = useSelector((state: RootState) => state.gameState.stage)
  let displayedComponent

  switch (currentStage) {
    case GameStage.StartGame:
      displayedComponent = <Main />
      break
    case GameStage.FetchingGame:
      displayedComponent = <Game />
      break
    case GameStage.Game:
      displayedComponent = <Game />
      break
    case GameStage.FinishGame:
      displayedComponent = <FinishGame />
      break
    default:
      break
  }

  return <div className="App">{displayedComponent}</div>
}

export default App
