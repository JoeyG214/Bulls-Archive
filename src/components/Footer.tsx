import Link from "next/link"

const Footer = () => {
  return (
    <footer className="shadow-lime-600 shadow">
      <div className="flex justify-center p-4">
        <span className="text-sm md:text-lg text-gray-500 font-semibold text-center">
          © {new Date().getFullYear()} <Link href={'https://github.com/JoeyG214'} className="hover:underline">Joey Guce</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer