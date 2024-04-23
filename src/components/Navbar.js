import React from 'react'
import logo from '../assests/logo.png' 

import { Link } from 'react-router-dom'
// import './Navbar.css'

const Navbar = () => {
  return (
    <div className='h-14 flex justify-between items-center  shadow-md'>
        <div className='logo h-20'>
            <img src = {logo} className="h-full" />         
        </div>

        <div className='mx-10 flex justify-between gap-4'>
          <Link to = '/'>
        <p>Home</p>
          </Link>
          <Link to = '/'>
          <p>About</p>
          </Link>
          <Link to = '/'>
          <p>Events</p>
          </Link>
          <Link to = '/'>
          <p>Gallery</p>
          </Link>
          <Link to = '/'>
          <p>Booking</p>
          </Link>
          <Link to = '/'>
          <p>Contact</p>
          </Link>
       
            

        </div>

    </div>
  )
}

export default Navbar