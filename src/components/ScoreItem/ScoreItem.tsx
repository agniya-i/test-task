import React, { FC } from 'react'
import styles from './ScoreItem.module.scss'

type Props = {
  label: number
  active: boolean
}

const ScoreItem: FC<Props> = ({ label, active }) => {
  return (
    <div className={styles.scoreItem}>
      {/* <div className={classNames({ isActive: active }, styles.scoreItem)}> */}
      <span className={styles.scoreItemLabel}>
        {label} {active}
      </span>
    </div>
  )
}

export default ScoreItem
