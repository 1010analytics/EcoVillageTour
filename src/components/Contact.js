import React from 'react'
import packageImg from "../assests/package.jpg";
 

const Contact = () => {
  return (
    <>
        <div className="mt-10 pt-5">
            <div className="text-2xl text-orange-950 font-medium">Contact Us</div>
            <div className='relative mt-3'>
                <img src = {packageImg} className='w-full ' style={{"height" : "80vh"}}/> 
                <div className='absolute bg-white top-8 p-8 left-20 rounded-md shadow-lg	'>
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


            </div>
        </div>

    </>
  )
}

export default Contact