import React from "react"

import styles from "./Modal.module.scss"
const Modal = ({ data, onClose }) => {
  return (
    <div className={styles.modal}>
      <h2>Дані з форми</h2>
      <p>Прізвище: {data.lastName}</p>
      <p>Ім'я: {data.firstName}</p>
      <p>Телефон: {data.phone}</p>
      <p>Email: {data.email}</p>
      <br />
      <div>
        <p>Студент ДУ "Житомирська політехніка"</p>
        <p>Група ЗІПЗ-21-1</p>
        <p>Дата виконання: 09.11.2023</p>
      </div>
      <button className={styles.button} onClick={onClose}>
        <svg
          className={styles.close}
          version="1.1"
          id="mdi-window-close"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
        </svg>
      </button>
    </div>
  )
}

export default Modal
