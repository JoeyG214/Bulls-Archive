'use client'

import { useState } from 'react'

import Link from 'next/link'

type Props = {}

const LoginForm = (props: Props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className='space-y-6' action='#' method='POST'>
      <div>
        <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
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
          <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
            Password
          </label>
          <div className='text-sm'>
            <Link href='/forgot-password' className='font-semibold text-green-900 hover:text-primaryGreen'>
              Forgot Password?
            </Link>
          </div>
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
        <button type='submit' className='credentialSubmit'>Sign in</button>
      </div>
    </form>
  )
}

export default LoginForm