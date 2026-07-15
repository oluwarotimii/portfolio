import Hero from ".././src/app/components/hero"
import About from ".././src/app/components/about"
import Projects from ".././src/app/components/projects"
import Skills from ".././src/app/components/skills"
import Contact from ".././src/app/components/contact"
import Header from ".././src/app/components/header"
import Footer from ".././src/app/components/footer"


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />

      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
