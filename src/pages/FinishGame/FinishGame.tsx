import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pageImage from '../../assets/PageImage.png'
import Button from '../../components/Button/Button'
import { RootState } from '../../store'
import { startGame } from '../../store/slices/gameInit'
import styles from './FinishGame.module.scss'

const FinishGame = () => {
  const dispatch = useDispatch()

  const { scoreRewards, currentQuestionIndex } = useSelector(
    (state: RootState) => state.game
  )

  const handleRestartClick = () => {
    dispatch(startGame())
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          className={styles.contentImage}
          src={pageImage}
          alt="Weloome Hand"
        />
        <div className={styles.contentDescription}>
          <h3 className={styles.contentDescriptionTitle}>Total Score</h3>
          <h2 className={styles.contentDescriptionScore}>
            {`$ ${scoreRewards[currentQuestionIndex].toLocaleString(
              'en-US'
            )} earned`}
          </h2>
          <Button label="Try Again" onClick={handleRestartClick} />
        </div>
      </div>
    </div>
  )
}

export default FinishGame
