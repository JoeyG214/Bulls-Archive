import Link from 'next/link'
import Image from 'next/image'

import LoginForm from '@/components/LoginForm'

const Login = () => {
  return (
    <section className='flex flex-col justify-center px-6 py-12 lg:px-8 mb-20'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <Image
          src='/usf-logo.png'
          alt='USF Logo'
          width={96}
          height={54}
          className='mx-auto h-auto'
        />
        <h2 className='header'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <LoginForm />
        <p className='mt-10 text-center text-sm text-gray-500'>
          Not a member?
          <Link href='/signup' className='font-semibold leading-6 text-green-900 hover:text-primaryGreen'> Sign up</Link>
        </p>
      </div>
    </section>
  )
}

export default Login