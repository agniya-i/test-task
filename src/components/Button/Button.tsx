import React, { FC } from 'react'
import styles from './Button.module.scss'

type Props = {
  label: string
  onClick: () => void
}
const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <span className={styles.buttonLabel}>{label}</span>
    </button>
  )
}

export default Button
