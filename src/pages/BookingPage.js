import React from "react";
import Navbar from "../components/Navbar";
import packageImg from "../assests/package.jpg";
import packageData from "../utils/PackageData";

const BookingPage = () => {
  console.log(packageData);
  return (
    <div id = "bookings">
      {/* <Navbar /> */}
      <div className="relative">
        {/* <img src = {packageImg} className='w-full h-96 opacity-80' /> */}
        {/* <h1 className='absolute top-3 p-5 m-3 text-xl'>Experience Unparalleled Comfort with </h1>
          <h1 className='absolute top-10 p-5 mx-3 my-5 text-3xl text-green-600'>ECOVILLAGETOUR</h1> */}
      </div>

      {/* <button>Book Now</button> */}

      <div className="m-10 pt-10 ">
        <div className="text-2xl text-orange-950 font-medium">Our Packages</div>

        <div>
          {packageData.map((ele, i) => (
            <div className="border border-orange-200 p-5 my-8 rounded-lg shadow-lg bg-orange-200">
              <h1 className="text-2xl">{ele.name}</h1>
              <p className="text-slate-800">{ele.Activities} </p>
              <div className="my-3 text-slate-800">
                <h1 className="m-0">Our Accommodations :</h1>
                <p>{ele.Accommodation} </p>
              </div>
              <div className="flex justify-center gap-5 ">
                <div className="text-orange-800  border-solid border-2 border-orange-800 rounded-md py-2 px-5">
                  {ele.Duration} Plan
                </div>
                <button className=" text-orange-800  border-solid border-2 border-orange-800 rounded-md py-2 px-5 ">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
