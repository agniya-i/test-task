import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Game.module.scss'
import ScoreTable from '../../components/ScoreTable'
import questionFromServer from '../../api/questions.json'
import {
  fetchQuestionsSuccess,
  nextQuestion,
  answerAndCheck,
  fetchQuestionsFail,
  failGame,
} from '../../store/slices/game'
import { IRootState, AppDispatch } from '../../store'
import OptionsList from '../../components/OptionsList'

const Game = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { questions, scoreRewards, currentQuestionIndex } = useSelector(
    (state: IRootState) => state.game
  )

  useEffect(() => {
    if (questionFromServer && questionFromServer.length) {
      dispatch(fetchQuestionsSuccess(questionFromServer))
    } else {
      dispatch(fetchQuestionsFail(''))
    }
  }, [])

  const handleCheckAnswer = async (id: number) => {
    dispatch(answerAndCheck({ id }))

    setTimeout(() => {
      if (
        !questions[currentQuestionIndex].correct_answers_ids.includes(id) ||
        currentQuestionIndex > questions.length - 1
      ) {
        dispatch(failGame())
      } else {
        dispatch(nextQuestion())
      }
    }, 1500)
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
      <ScoreTable
        className={styles.scoreRewardsWrapper}
        scoreRewards={scoreRewards}
      />
    </div>
  )
}

export default Game
