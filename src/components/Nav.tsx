import Link from "next/link"
import Image from "next/image"

const Nav = () => {
  return (
    <header className="z-50">
      <nav className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center gap-2 md:gap-6">
          <div className="h-10 sm:h-14 w-auto">
            <Link href={'/'}>
              <Image
                className="h-8 sm:h-12 w-auto"
                src="/usf-logo.png"
                alt="USF Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div>
            <h1 className="flex text-gray-900 text-lg xs:text-2xl font-semibold tracking-widest">
              Bulls Archive
            </h1>
          </div>
        </div>
        <div>
          <Link href="/login" className="text-lg md:text-xl text-gray-900 hover:text-[#41fd24] font-semibold leading-6">
            Log in
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav