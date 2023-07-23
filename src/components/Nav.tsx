import Link from 'next/link'
import Image from 'next/image'
import UserButton from './UserButton'

const Nav = () => {
  return (
    <header className='z-50'>
      <nav className='flex items-center justify-between p-4 lg:px-8'>
        <div className='flex items-center gap-2 md:gap-6'>
          <div className='h-10 sm:h-14 w-auto'>
            <Link href={'/'}>
              <Image
                className='h-8 sm:h-12 w-auto'
                src='/usf-logo.png'
                alt='USF Logo'
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div>
            <h1 className='flex text-gray-900 text-lg xs:text-2xl font-semibold tracking-widest'>
              Bulls Archive
            </h1>
          </div>
        </div>
        <UserButton />
      </nav>
    </header>
  )
}

export default Nav