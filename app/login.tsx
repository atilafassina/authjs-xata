'use client'

import { useState } from 'react'
import LoginIcon from './login-icon'
import { signIn } from 'next-auth/react'

export function Login() {
  const [inFlight, setFlight] = useState(false)

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault()
        setFlight(true)
        signIn('github', { callbackUrl: '/in' })
      }}
    >
      <button type="submit" disabled={inFlight}>
        Knock knock <LoginIcon />
      </button>
    </form>
  )
}
