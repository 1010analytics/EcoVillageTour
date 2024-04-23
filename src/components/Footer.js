import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";



const Footer = () => {
  return (
    <div className='pt-7 bg-orange-900 text-white pb-7'>
      <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start px-10 mx-7 text-center md:text-left'>
        <div>
          <h2 className='text-2xl mb-3 mt-2'>EcoVillageTour</h2>
          <ul className=''>
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Bookings</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>

        </div>
        <div>
          <h2 className='text-xl mb-3 mt-5 md:mt-2'>Social Media</h2>
          <ul className=''>
            <li className='flex gap-3 justify-start items-center mb-2'><FaFacebook />Facebook</li>
            <li className='flex gap-3 justify-start items-center mb-2'><RiInstagramFill/>Instagram</li>
            <li className='flex gap-3 justify-start items-center mb-2'><AiFillTwitterCircle />Twitter</li>

          </ul>

        </div>
        <div>
          <h2 className='text-xl mb-3 mt-5 md:mt-2'>Legal</h2>
          <ul className=''>
            <li>Privacy Policy</li>
            <li>Licensing</li>
            <li>Terms & Conditions</li>

          </ul>

        </div>
      </div>

    </div>
  )
}

export default Footer