'use client'

import { useState } from 'react'

const NameInput = () => {

  const [name, setName] = useState('')

  return (
    <div className='mt-2'>
      <input
        name='name'
        type='text'
        required
        placeholder='First Last'
        autoComplete='name'
        className='credentialInput'
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </div>
  )
}

export default NameInput