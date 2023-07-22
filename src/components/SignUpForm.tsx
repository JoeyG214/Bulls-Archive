'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SignUpForm = () => {

  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [error, setError] = useState()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      if (!response.ok) {
        throw new Error('Sign up failed')
      }

      router.push('/login')
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Could not create user.', error)
      }
    }
  }

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
      <div>
        <label className='block text-sm font-medium leading-6 text-gray-900'>
          Name
        </label>
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
      </div>

      <div>
        <label className='block text-sm font-medium leading-6 text-gray-900'>
          Email address
        </label>
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
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label className='block text-sm font-medium leading-6 text-gray-900'>
            Password
          </label>
        </div>
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
      </div>

      <div>
        <button type='submit' className='credentialSubmit'>Create account</button>
      </div>
    </form>
  )
}

export default SignUpForm