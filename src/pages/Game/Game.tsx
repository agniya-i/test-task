import React from 'react'
import styles from './Game.module.scss'
import ScoreTable from '../../components/ScoreTable'
import { IScoreItem } from '../../types/tyles'

const AVAILABLE_SCORES_TEST: IScoreItem[] = [{ label: 1000 }, { label: 2000 }]

const Game = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}>Game</h3>
        <div className={styles.answersList}>Hello</div>
      </div>
      <ScoreTable scoreItems={AVAILABLE_SCORES_TEST} />
    </div>
  )
}

export default Game
