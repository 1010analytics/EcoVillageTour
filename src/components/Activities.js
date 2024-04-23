import React from 'react'
import ride from '../assests/ride.png'
import farm from '../assests/farm.png'
import play from '../assests/playarea.png'
import swim from '../assests/swim.webp'
import games from '../assests/games.webp'




const Activities = () => {
  return (
    <>
     <div className = 'm-10 px-5 md:px-10 pt-5'> 
        <div className='text-2xl text-orange-950 font-medium mb-4 '>
            Activities
        </div>

        <div className='flex justify-center md:justify-between items-center text-center flex-wrap gap-3'>
            <div className='my-5'>
                <img className='m-auto' src= {ride} alt = "ride" />
                <h3 className='pt-3 '>Tractor Trolly Ride</h3>
            </div>
            <div className='my-5'>
                <img  className='m-auto' src= {farm} alt="farm" />
                <h3 className='pt-3 '>Farming Activities</h3>
            </div>
            <div className='my-5'>
                <img  className='m-auto' src= {play} alt = "play" />
                <h3 className='pt-3 '>Play Area</h3>
            </div>
            <div className='my-5'>
                <img  className='m-auto' src= {swim} alt = "swim" />
                <h3 className='pt-3 '>Swimming</h3>
            </div>
            <div className='my-5'>
                <img  className='m-auto' src= {games} alt = "games" />
                <h3 className='pt-3 '>Outdoor & Indoor Games</h3>
            </div>
        </div>
   
  
    </div>
    </>
  )
}

export default Activities