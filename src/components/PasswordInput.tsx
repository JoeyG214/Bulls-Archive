'use client'

import { useState } from 'react'

const PasswordInput = () => {

  const [password, setPassword] = useState('')

  return (
    <div className="mt-2">
      <input
        name="password"
        type="password"
        required
        placeholder='Password'
        autoComplete="current-password"
        className="credentialInput"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
    </div>
  )
}

export default PasswordInput