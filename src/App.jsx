import BeforeAfter from './components/BeforeAfter'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Locations from './components/Locations'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Services from './components/Services'
import TopBar from './components/TopBar'

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <BeforeAfter />
        <Products />
        <Locations />
        <Booking />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
