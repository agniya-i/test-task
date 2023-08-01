import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import questionsFromServer from '../../api/questions.json'
import {
  fetchQuestionsSuccess,
  nextQuestion,
  answerAndCheck,
  fetchQuestionsFail,
  failGame,
} from '../../store/slices/game'
import { RootState, AppDispatch } from '../../store'
import OptionsList from '../../components/OptionsList'
import ScoreTable from '../../components/ScoreTable'
import QuestionError from '../../types/QuestionErorr'
import styles from './Game.module.scss'

const Game = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { questions, scoreRewards, currentQuestionIndex } = useSelector(
    (state: RootState) => state.game
  )

  useEffect(() => {
    if (questionsFromServer && questionsFromServer.length) {
      dispatch(fetchQuestionsSuccess(questionsFromServer))
    } else {
      dispatch(fetchQuestionsFail(QuestionError.Loading))
    }
  }, [])

  const handleCheckAnswer = async (id: number) => {
    await dispatch(answerAndCheck({ id }))

    setTimeout(() => {
      if (
        !questions[currentQuestionIndex].correct_answers_ids.includes(id) ||
        currentQuestionIndex >= questions.length - 1
      ) {
        dispatch(failGame())
      } else {
        dispatch(nextQuestion())
      }
    }, 1500)
  }

  return (
    <div className={styles.wrapper}>
      {questions && questions.length && (
        <>
          <div className={styles.content}>
            <h3 className={styles.contentTitle}>
              {questions[currentQuestionIndex].question}
            </h3>
            <OptionsList
              onCheckAnswer={handleCheckAnswer}
              options={questions[currentQuestionIndex].answer_options}
            />
          </div>
          <ScoreTable
            className={styles.scoreRewardsWrapper}
            scoreRewards={scoreRewards}
          />
        </>
      )}
    </div>
  )
}

export default Game
