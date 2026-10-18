import { useState } from 'react'
import { login } from '../services/authService.js'
import { validateLogin } from '../utils/validateLogin.js'

export function useLoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [formError, setFormError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  async function submitLogin(event) {
    event.preventDefault()

    const errors = validateLogin(email, password)
    setFieldErrors(errors)
    setFormError('')

    if (Object.keys(errors).length > 0) return

    setIsLoading(true)
    try {
      await login(email, password)
    } catch (error) {
      console.error('Falha no login:', error.message)
      setFormError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    email,
    password,
    fieldErrors,
    formError,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    submitLogin,
  }
}
