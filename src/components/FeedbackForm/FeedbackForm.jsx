"use client"

import React, { useRef, useState } from "react"
import ReactDOM from "react-dom"
import Modal from "../Modal/Modal"
import styles from "./FeedbackForm.module.scss"

const FeedbackForm = () => {
  const [formData, setFormData] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [validationErrors, setValidationErrors] = useState({})

  const lastNameRef = useRef(null)
  const firstNameRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)

  const validateForm = () => {
    const errors = {}

    if (!lastNameRef.current.value.match(/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i)) {
      errors.lastName = "Не коректний запис"
    }

    if (!firstNameRef.current.value.match(/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i)) {
      errors.firstName = "Не коректний запис"
    }

    const phoneRegex = /\+|380([5|6|7|9][0|1|3|5|6|7|9])\d{7}/i
    if (!phoneRegex.test(phoneRef.current.value.trim())) {
      errors.phone = "Будь ласка, введіть коректний номер телефону (+380xxxxxxxxx)"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailRef.current.value.trim())) {
      errors.email = "Будь ласка, введіть коректний email"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      const data = {
        lastName: lastNameRef.current.value,
        firstName: firstNameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
      }
      e.target.reset()
      setFormData(data)
      setShowModal(true)
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Прізвище:
          <input type="text" ref={lastNameRef} className={styles.input} />
          {validationErrors.lastName && <div className={styles.error}>{validationErrors.lastName}</div>}
        </label>

        <label className={styles.label}>
          Ім'я:
          <input type="text" ref={firstNameRef} className={styles.input} />
          {validationErrors.firstName && <div className={styles.error}>{validationErrors.firstName}</div>}
        </label>

        <label className={styles.label}>
          Телефон:
          <input type="tel" ref={phoneRef} className={styles.input} />
          {validationErrors.phone && <div className={styles.error}>{validationErrors.phone}</div>}
        </label>

        <label className={styles.label}>
          Email:
          <input type="email" ref={emailRef} className={styles.input} />
          {validationErrors.email && <div className={styles.error}>{validationErrors.email}</div>}
        </label>

        <button className={styles.button} type="submit">
          Відправити
        </button>
      </form>

      {showModal &&
        ReactDOM.createPortal(
          <Modal
            data={formData}
            onClose={() => {
              setShowModal(false)
            }}
          />,
          document.getElementById("modal-root")
        )}
    </div>
  )
}

export default FeedbackForm
