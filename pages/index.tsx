import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import x1 from '../styles/images/hero.jpg'
import Main from '../components/Main'
import Services from '../components/Services/Services'
import Reviews from '../components/Reviews/Reviews'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="relative overflow-x-hidden h-[fit-content]">
      <Head>
         <title>All Star Driving School</title>
      </Head>

      <nav className='fixed w-full top-0 z-30'>
        <Nav />
      </nav>

      <main className=''>

        <section className=' '>
          <Main />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <AboutUs />
        </section>
        <section>
          <Reviews />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <Contact />
        </section>

      </main>

    </div>
  )
}
