import React from 'react'
import { useDispatch } from 'react-redux'

import styles from './Main.module.scss'
import pageImage from '../../assets/page-image.png'
import Button from '../../components/Button'
import { startGame } from '../../store/slices/gameInit'

function Main() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(startGame())
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={pageImage} alt="page" />
        <div className={styles.contentDescription}>
          <h2 className={styles.contentDescriptionTitle}>
            Who wants to be a millionaire?
          </h2>
          <Button label="Start" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default Main
