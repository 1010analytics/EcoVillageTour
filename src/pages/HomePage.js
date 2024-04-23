import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Event from '../components/Event'
import Activities from '../components/Activities'
import Gallery from '../components/Gallery'
import BookingPage from './BookingPage'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Event />
        <Activities />
        <Gallery />
        <BookingPage />
        <Contact />
        <Footer />
    </>
  )
}

export default HomePage