'use client'

import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import { toast } from 'react-toastify'

const UserButton = () => {

  const session = useSession()
  const router = useRouter()

  const handleLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.push('/')
      toast.success('Successfully logged out!')
    })
  }

  return (
    <div>
      <div>
        {session.status !== 'authenticated' && (
          <Link href='/login' className='text-lg md:text-xl text-gray-900 hover:text-primaryGreen font-semibold leading-6'>
            Login
          </Link>
        )}
        {session.status === 'authenticated' && (
          <button className='text-lg md:text-xl text-gray-900 hover:text-primaryGreen font-semibold leading-6' onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default UserButton