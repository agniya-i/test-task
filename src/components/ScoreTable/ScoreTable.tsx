import React, { FC } from 'react'
import styles from './ScoreTable.module.scss'
import ScoreItem from '../ScoreItem'
import { IScoreItem } from '../../types/tyles'

type Props = {
  scoreItems: IScoreItem[]
}

const ScoreTable: FC<Props> = ({ scoreItems }) => {
  return (
    <div className={styles.scoreTable}>
      {scoreItems.map((item) => (
        <ScoreItem key={item.label} label={item.label} active={false} />
      ))}
    </div>
  )
}

export default ScoreTable
