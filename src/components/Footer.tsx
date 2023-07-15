import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-primary shadow">
      <div className="flex justify-center p-4 mx-auto">
        <span className="text-sm md:text-lg text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} <Link href={'https://github.com/JoeyG214'} className="hover:underline">Joey Guce</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer