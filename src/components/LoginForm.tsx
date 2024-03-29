'use client'

import React, { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { toast } from 'react-toastify'

const LoginForm = () => {

  const session = useSession()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/courses')
    }
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    signIn('credentials', {
      email,
      password,
      callbackUrl: '/courses',
      redirect: false,
    }).then((response) => {
      if (response && response.error) {
        toast.error(response.error)
      } else if (response && !response.error) {
        toast.success('Successfully logged in!')
        router.push('/courses')
      }
    })
  }

  return (
    <form className='space-y-6' onSubmit={handleSubmit}>
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