import Link from "next/link"
import Image from "next/image"

const Nav = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-2 lg:px-8">
        <div>
          <Link href={'/'} className="-m-1.5 p-1.5">
            <Image
              className="h-8 w-auto sm:h-12"
              src="/usf-logo.png"
              alt="USF Logo"
              width={128}
              height={128}
            />
          </Link>
        </div>
        <div>
          <h1 className="flex text-gray-900 text-lg xs:text-2xl font-semibold tracking-widest">
            Bulls Archive
          </h1>
        </div>
        <div>
          <Link href="/login" className="text-sm lg:text-lg text-gray-900 hover:text-green-600 font-semibold leading-6">
            Log in
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav