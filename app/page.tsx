import {
  Navigation,
  Hero,
  Projects,
  Hobbies,
  About,
  Contact,
  Footer,
} from '@/components'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Hobbies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
