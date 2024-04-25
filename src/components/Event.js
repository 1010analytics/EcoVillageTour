import React from 'react'

const Event = () => {
  return (
    <>
    <div id = "events" className = 'm-10 pt-5'>
        <div className='text-2xl text-orange-950 font-medium mb-4 pt-5'>
            Our Events
        </div>
        <div className='flex gap-4 justify-center md:justify-between items-center flex-wrap'>
            <div className = 'border border-slate-300 py-4 px-5 rounded-md shadow-md	'>
                <h1 className='text-green-600 font-semibold pb-0 mb-0'>Community Organic Gardening Workshop</h1>
                <div className='text-md text-orange-800  pt-2'>
                <p>July 15th, 2024</p>
                <p>Community Garden</p>
                <button className='px-3 py-1 my-2 border-solid border-2 border-orange-800 rounded-md bg-orange-800 text-white'>Join Event</button>
                </div>
            </div>

            <div className = 'border border-slate-300 py-4 px-5 rounded-md shadow-md	'>
                <h1 className='text-green-600 font-semibold pb-0 mb-0'>Community Organic Gardening Workshop</h1>
                <div className='text-md text-orange-800  pt-2'>
                <p>July 15th, 2024</p>
                <p>Community Garden</p>
                <button className='px-3 py-1 my-2 border-solid border-2 border-orange-800 rounded-md bg-orange-800 text-white'>Join Event</button>
                </div>
            </div>

            <div className = 'border border-slate-300 py-4 px-5 rounded-md shadow-md	'>
                <h1 className='text-green-600 font-semibold pb-0 mb-0'>Community Organic Gardening Workshop</h1>
                <div className='text-md text-orange-800  pt-2'>
                <p>July 15th, 2024</p>
                <p>Community Garden</p>
                <button className='px-3 py-1 my-2 border-solid border-2 border-orange-800 rounded-md bg-orange-800 text-white'>Join Event</button>
                </div>
            </div>

        </div>

        </div>

<div className='my-5 p-10 bg-orange-200'>

<h1 className='text-2xl'> EcoVillageTour Initiates New Solar Project</h1>
<p> We're excited to announce the launch of our new solar energy project, aimed at powering our community with 100% renewable energy. Join us in our journey towards sustainability.

</p>

<button className='mt-5 px-3 py-1 my-2 border-solid border-2 border-orange-800 rounded-md  text-orange-800'>Read More</button>
</div>

    
    {/* <div>Our Event 
        <p>
        Community Organic Gardening Workshop
Date: July 15th, 2024
Location: Community Garden

Join Event
        </p>
        <h4>
            Agritourism
        </h4>
        <p>Take a picnic where farming, fun rides, games & delicious chulha cooked food will keep you engaged the whole day.</p>
        <h4>Celebrations</h4>
        <p>We design your special events & parties with farm activities, decorations & music to make your day memorable.</p>
    </div> */}

   

    </>
  )
}

export default Event