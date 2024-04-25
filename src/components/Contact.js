import React from 'react'
import packageImg from "../assests/package.jpg";
 

const Contact = () => {
  return (
    <>
        <div id = "contact" className="mt-10 pt-5">
            <div className="text-2xl text-orange-950 font-medium">Contact Us</div>
            <div className='relative mt-3'>
                <img src = {packageImg} className='w-full ' style={{"height" : "80vh"}}/> 

                <div className='absolute bg-orange-50 left-10 top-8 p-8 md:left-20 rounded-md shadow-lg	'>
                    <h3 className='text-orange-800 text-xl'>Send your enquiry here</h3>
                    <form className='flex flex-col text-left text-orange-800'>
                        <div className='flex flex-col my-3 '>
                            <label >Your Name : </label>
                            <input className='border border-1 border-orange-800 rounded-md px-3 py-1' type = "text"></input>
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label> Email : </label>
                            <input  className = 'border border-1 border-orange-800 rounded-md px-3 py-1' type = "email"></input>
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label>Your Message : </label>
                            <textarea className = 'border border-1 border-orange-800 rounded-md px-3 py-1'  type = "text"></textarea>
                        </div>

                        <button className='px-3 py-1 my-2 border-solid border-2 border-orange-800 rounded-md bg-orange-800 text-white'>Submit</button>
                        
        
                    </form>

                </div>

                <div className='absolute bg-orange-50 hidden lg:block md:top-8 md:right-20 rounded-md shadow-lg p-8 '>
                    <h3 className='text-orange-800 text-xl'>Our Address : </h3>
                    <p className='text-orange-900'>Betul, Madhya Pradesh(200 km from Bhopal)</p>
                    <h3 className='text-orange-800 text-xl mt-2'>Our Email : </h3>
                    <p className='text-orange-900'>demo123@gmail.com</p>
                    <h3 className='text-orange-800 text-xl mt-2'>Open hours : </h3>
                    <p className='text-orange-900'>10:00 a.m. - 5:00 p.m.</p>
                </div>


            </div>
        </div>

    </>
  )
}

export default Contact