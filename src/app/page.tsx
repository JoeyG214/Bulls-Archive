import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <main className="flex flex-col justify-between min-h-screen bg-white">
      <Nav />
      <Hero />
      <Footer />
    </main>
  )
}

export default Home