import React, { FC } from 'react'
import styles from './AnswerItem.module.scss'

type Props = {
  label: string
  active: boolean
}

const AnswerItem: FC<Props> = ({ label, active }) => {
  return (
    <div className={styles.answerItem}>
      {/* <div className={classNames({ isActive: active }, styles.answerItem)}> */}
      <span className={styles.answerItemLabel}>
        {label} {active}
      </span>
    </div>
  )
}

export default AnswerItem
