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
          width={72}
          height={72}
          className='mx-auto'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
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