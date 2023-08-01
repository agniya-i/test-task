import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import styles from './OptionsList.module.scss'
import OptionItem from '../OptionItem'
import AnswerOption from '../../types/AnswerOption'
import { optionLetters } from '../../utils/constants'

type Props = {
  options: AnswerOption[]
  onCheckAnswer: (id: number) => void
}

const OptionsList: FC<Props> = ({ options, onCheckAnswer }) => {
  const { selectedAnswer, isSelectedAnswerCorrect } = useSelector(
    (state: RootState) => state.game
  )

  return (
    <div className={styles.optionsList}>
      {options.map((option, index) => {
        const isSelected = option.id === selectedAnswer
        const isCorrect = isSelected && isSelectedAnswerCorrect
        return (
          <OptionItem
            optionLetter={optionLetters[index]}
            onClick={onCheckAnswer}
            key={option.text}
            option={option}
            isSelected={isSelected}
            isCorrect={isSelected ? isCorrect : undefined}
          />
        )
      })}
    </div>
  )
}

export default OptionsList
