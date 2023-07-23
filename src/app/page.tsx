import Link from 'next/link'

import Background from '@/components/Background'

const Home = () => {
  return (
    <div className='isolate px-6 lg:px-8 pb-20' >
      <div className='mx-auto max-w-3xl py-16 sm:py-24 lg:py-28'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Computer Science resources from past USF students
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Contribute to the knowledge base of future computer science students by uploading your current lecture notes,
            or learn from the experiences of past students by checking out their notes.
          </p>
          <div className='subheader'>
            <Link href='/login' className='customBtn'>
              Get started
            </Link>
          </div>
        </div>
      </div>
      <Background
        top='-top-64'
        smTop='sm:-top-40'
        left='left-[calc(50%-11rem)]'
        smLeft='sm:left-[calc(50%-36rem)]'
        rotate='rotate-[30deg]'
      />
      <Background
        top='top-[calc(100%-48rem)]'
        smTop='sm:top-[calc(100%-80rem)]'
        left='left-[calc(50%+3rem)]'
        smLeft='sm:left-[calc(50%+30rem)]'
        rotate='rotate-[0deg]'
      />
      <Background
        top='top-[calc(100%-24rem)]'
        smTop='sm:top-[calc(100%-50rem)]'
        left='left-[calc(50%-12rem)]'
        smLeft='sm:left-[calc(50%-20rem)]'
        rotate='rotate-[150deg]'
      />
    </div>
  )
}

export default Home