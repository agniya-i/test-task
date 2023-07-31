import React from 'react'
import { useSelector } from 'react-redux'

import styles from './FinishGame.module.scss'
import { IRootState } from '../../store'

const FinishGame = () => {
  const { scoreRewards, currentQuestionIndex } = useSelector(
    (state: IRootState) => state.game
  )
  return (
    <div className={styles.wrapper}>{scoreRewards[currentQuestionIndex]}</div>
  )
}

export default FinishGame
