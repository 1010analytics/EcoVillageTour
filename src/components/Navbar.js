import React, {useState} from 'react'
import logo from '../assests/logo.png' 
import { IoMenu } from "react-icons/io5";
import { scroll } from './Sroll';


import { Link } from 'react-router-dom'
// import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenu = () => {
    console.log('menu button')
    setMenuOpen(!menuOpen)
  }
  return (
    <>
    <div className='h-14 flex justify-between items-center  shadow-md'>
        <div className='logo h-20'>
            <img src = {logo} className="h-full" />         
        </div>

        <div className='mx-10 md:flex md:justify-between gap-4 hidden '>
          <Link to = '/'>
        <p>Home</p>
          </Link>
          <button onClick = {() => scroll('about')}>
          <p>About</p>
          </button>
          <button onClick = {() => scroll('events')}>
          <p>Events</p>
          </button>
          <button onClick = {() => scroll('gallery')}>
          <p>Gallery</p>
          </button>
          <button onClick = {() => scroll('bookings')}>
          <p>Bookings</p>
          </button>
          <button onClick = {() => scroll('contact')}>
          <p>Contact</p>
          </button>

       
        </div>

        <div className='block md:hidden mx-10'>
          <button onClick={handleMenu}>
          <IoMenu />
          </button>
        </div>

    </div>
     {
      menuOpen && (
        <>
        <div className=' shadow-md block md:hidden'>
          <ul className='text-md '>
            <li className = ' mt-2 mb-2'>Home</li>
            <li className = 'mb-2'>About</li>
            <li className = 'mb-2'>Events</li>
            <li className = 'mb-2'>Gallery</li>
            <li className = 'mb-2'>Booking</li>
            <li className = 'mb-2'>Contact</li>
          </ul>
        </div>
        </>

      )
    }
    </>
  )
}

export default Navbar