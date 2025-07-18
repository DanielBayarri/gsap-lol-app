import About from "./components/About"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Story from "./components/Story"
import Contact from "./components/Contact"

const App = () => {

  return (
<main className="relative min-h-screen w-screen overflow-x-hidden ">
  <Hero/>
  <About/>
  <Features/>
  <Story/>
  <Contact/>
  <Footer/>
</main>
  )
}

export default App
