import React, { FC, useState } from 'react'
import classNames from 'classnames'
import styles from './ScoreTable.module.scss'
import ScoreItem from '../ScoreItem'

type Props = {
  scoreRewards: number[]
  className?: string | null
}

const ScoreTable: FC<Props> = ({ scoreRewards, className }) => {
  const [isScoreTableOpen, setIsScoreTableOpen] = useState(false)

  return (
    <div
      className={classNames(
        styles.scoreTable,
        { [styles.isOpen]: isScoreTableOpen },
        className
      )}
    >
      <div className={classNames(styles.navigation)}>
        <button
          type="button"
          className={styles.navigationMenuButton}
          onClick={() => setIsScoreTableOpen((prevState) => !prevState)}
          aria-label="toggleScoreTable"
        />
      </div>
      <div className={styles.scoreTableListContainer}>
        <div className={styles.scoreTableList}>
          {scoreRewards.map((item, index) => (
            <ScoreItem key={item} index={index} label={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

ScoreTable.defaultProps = {
  className: null,
}

export default ScoreTable
