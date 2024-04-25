import React from 'react'
import b1 from '../assests/b1.webp'
import b2 from '../assests/b2.webp'
import b3 from '../assests/b3.webp'
import b4 from '../assests/b4.webp'


const About = () => {
  return (
    <div id = 'about' className='m-10'>
        <div className='text-2xl text-orange-950 font-medium'>
            About Us
        </div>
        <div className='mx-0 md:mx-10 pt-3 text-md text-orange-800'>
            <div className='w-full sm:w-9/12 text-center m-auto pb-3'>
            Embark on a journey where nature, sustainability, and community converge in the heart of Betul Madhya Pradesh (200 KM from Bhopal, 300 KM from Indore, 150 KM from Nagpur Maharastra and 100 KM from Amravati Maharastra) .
            </div>
            <div className='w-full sm:w-9/12 m-auto pb-3'>
                Our Eco Village Tours offer an immersive experience into the world of eco-friendly living, inviting you to explore the serene beauty and innovative spirit of our sustainable settlements. 

            </div>
        </div>

        <div className='my-3 text-md font-medium'>
            <div className='text-green-600 text-2xl mb-4'>
                Welcome to our home !
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                <div>
                    <img src = {b1} />
                </div>
                <div>
                    <img src = {b2} />
                </div>
                <div>
                    <img src = {b3} />
                </div>
                <div>
                    <img src = {b4} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default About