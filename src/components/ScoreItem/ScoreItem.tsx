import React, { FC } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import styles from './ScoreItem.module.scss'
import { IRootState } from '../../store'

type Props = {
  label: number
  index: number
}

const ScoreItem: FC<Props> = ({ label, index }) => {
  const { currentQuestionIndex } = useSelector(
    (state: IRootState) => state.game
  )

  return (
    <div
      className={classNames(styles.scoreItem, {
        [styles.isActive]: currentQuestionIndex === index,
        [styles.isDisabled]: currentQuestionIndex > index,
      })}
    >
      <svg
        width="240"
        height="41"
        viewBox="0 0 240 40"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.scoreItemShape}
      >
        <path d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z" />
      </svg>

      <span className={styles.scoreItemLabel}>
        {`$ ${label.toLocaleString('en-US')}`}
      </span>
    </div>
  )
}

export default ScoreItem
