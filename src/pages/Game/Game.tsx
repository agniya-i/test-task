import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Game.module.scss'
import ScoreTable from '../../components/ScoreTable'
import questionFromServer from '../../api/questions.json'
import {
  fetchQuestionsSuccess,
  answerQuestion,
  nextQuestion,
} from '../../store/slices/game'
import { finishGame } from '../../store/slices/gameInit'
import { IRootState, AppDispatch } from '../../store'
import OptionsList from '../../components/OptionsList'

const Game = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { questions, scoreRewards, currentQuestionIndex } = useSelector(
    (state: IRootState) => state.game
  )

  useEffect(() => {
    dispatch(fetchQuestionsSuccess(questionFromServer))
  }, [])

  const handleCheckAnswer = async (id: number) => {
    dispatch(answerQuestion({ id }))

    setTimeout(() => {
      if (questions[currentQuestionIndex].correct_answers_ids.includes(id)) {
        dispatch(nextQuestion())
      } else {
        dispatch(finishGame())
      }
    }, 1000)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {questions.length && (
          <>
            <h3 className={styles.contentTitle}>
              {questions[currentQuestionIndex].question}
            </h3>
            <OptionsList
              onCheckAnswer={handleCheckAnswer}
              options={questions[currentQuestionIndex].answer_options}
            />
          </>
        )}
      </div>
      <ScoreTable scoreRewards={scoreRewards} />
    </div>
  )
}

export default Game
