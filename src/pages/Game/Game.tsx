import React from 'react'
import styles from './Main.module.scss'
import pageImage from '../../assets/page-image.png'
import Button from '../../components/Button'
import ScoreTable from '../../components/ScoreTable'
import { IScoreItem } from '../../types/tyles'

const AVAILABLE_SCORES_TEST: IScoreItem[] = [{ label: 1000 }, { label: 2000 }]

const Game = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.contentTitle}></h3>
        <div className={styles.answersList}></div>
      </div>
      <ScoreTable scoreItems={AVAILABLE_SCORES_TEST} />
    </div>
  )
}

export default Game
