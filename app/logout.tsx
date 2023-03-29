'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'

export function Logout() {
  const [inFlight, setFlight] = useState(false)

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault()
        setFlight(true)
        signOut({ callbackUrl: '/' })
      }}
    >
      <button type="submit" disabled={inFlight}>
        bye
      </button>
    </form>
  )
}
