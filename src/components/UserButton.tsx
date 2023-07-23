'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { toast } from 'react-toastify'

const UserButton = () => {

  const session = useSession()

  return (
    <div>
      <div>
        {session.status !== 'authenticated' && (
          <Link href='/login' className='text-lg md:text-xl text-gray-900 hover:text-primaryGreen font-semibold leading-6'>
            Login
          </Link>
        )}
        {session.status === 'authenticated' && (
          <button className='text-lg md:text-xl text-gray-900 hover:text-primaryGreen font-semibold leading-6' onClick={() => {
            toast.success('Logged out successfully!')
            signOut({ callbackUrl: '/' })
          }}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default UserButton