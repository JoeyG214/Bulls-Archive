import Image from 'next/image'
import Link from 'next/link'

import SignUpForm from '@/components/SignUpForm'

const SignUp = () => {

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
          Create an account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <SignUpForm />
        <p className='mt-10 text-center text-sm text-gray-500'>
          Already a member?
          <Link href='/login' className='font-semibold leading-6 text-green-900 hover:text-primaryGreen'> Login</Link>
        </p>
      </div>
    </section>
  )
}

export default SignUp