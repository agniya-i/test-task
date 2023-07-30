import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Game.module.scss'
import ScoreTable from '../../components/ScoreTable'
import questionFromServer from '../../api/questions.json'
import { fetchQuestionsSuccess, nextQuestion } from '../../store/slices/game'
import { IRootState } from '../../store'

const Game = () => {
  const dispatch = useDispatch()
  const { questions, scoreRewards, currentQuestionIndex } = useSelector(
    (state: IRootState) => state.game
  )

  useEffect(() => {
    dispatch(fetchQuestionsSuccess(questionFromServer))
  }, [])

  const handleOptionClick = useCallback((id: number) => {
    if (questions[currentQuestionIndex].correct_answers_ids.includes(id)) {
      dispatch(nextQuestion())
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {questions.length && (
          <>
            <h3 className={styles.contentTitle}>
              {questions[currentQuestionIndex].question}
            </h3>
            <div className={styles.answersList}>
              {questions[currentQuestionIndex].answer_options.map((option) => (
                <button
                  type="button"
                  onClick={() => handleOptionClick(option.id)}
                  key={option.id}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <ScoreTable scoreRewards={scoreRewards} />
    </div>
  )
}

export default Game
