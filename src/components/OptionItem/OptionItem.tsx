import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './OptionItem.module.scss'
import AnswerOption from '../../types/AnswerOption'

type Props = {
  option: AnswerOption
  onClick: (id: number) => void
  optionLetter: string
  isSelected: boolean
  isCorrect: boolean | null | undefined
}

const OptionItem: FC<Props> = ({
  option,
  optionLetter,
  onClick,
  isSelected,
  isCorrect,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(option.id)}
      className={classNames(styles.optionItem, {
        [styles.isSelected]: isSelected,
        [styles.isCorrect]: isCorrect,
        [styles.isWrong]: isCorrect === false,
      })}
    >
      <svg
        width="373"
        height="73"
        viewBox="0 0 373 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.optionItemShape}
      >
        <path d="M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z" />
      </svg>
      <div className={styles.optionItemLabel}>
        <span className={styles.optionItemLabelLetter}>{optionLetter}</span>
        <span className={styles.optionItemLabelText}>{option.text}</span>
      </div>
    </button>
  )
}

export default OptionItem
