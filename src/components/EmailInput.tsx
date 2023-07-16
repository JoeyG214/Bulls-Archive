'use client'

import { useState } from 'react'

const EmailInput = () => {

  const [email, setEmail] = useState('')

  return (
    <div className='mt-2'>
      <input
        name='email'
        type='email'
        required
        placeholder='your-email@usf.edu'
        autoComplete='email'
        className='credentialInput'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
    </div>
  )
}

export default EmailInput