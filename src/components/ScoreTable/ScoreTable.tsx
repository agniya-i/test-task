import React, { FC } from 'react'
import styles from './ScoreTable.module.scss'
import ScoreItem from '../ScoreItem'

type Props = {
  scoreRewards: number[]
}

const ScoreTable: FC<Props> = ({ scoreRewards }) => {
  return (
    <div className={styles.scoreTable}>
      {scoreRewards.map((item, index) => (
        <ScoreItem key={item} index={index} label={item} />
      ))}
    </div>
  )
}

export default ScoreTable
