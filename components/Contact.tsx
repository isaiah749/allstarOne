import React from "react";

export default function Contact() {
  return (
    <div className="h-[fit-content] pt-10">
      <h2 className="uppercase font-bold text-xl pl-5">Contact Us</h2>
      <section className="md:flex md:items-center md:justify-around">
      <div className="pl-5 pt-10">
          <h3 className="font-semibold text-lg">Phone Number</h3>
          <div className="-mt-2 flex items-center pt-5 justify-start">
            <button className="bg-red-600 w-[150px] py-3 rounded-lg uppercase text-white font-semibold  ">
              Call Now
            </button>
          </div>
        <p className="text-lg font-semibold pt-3">(812) 339-9908</p>
        </div>
        <div className="pl-5 pt-10">
          <h3 className="font-semibold text-lg">Address</h3>
          <div className="-mt-2 flex items-center pt-5 justify-start">
            <button className="bg-red-600 w-[150px] py-3 rounded-lg uppercase text-white font-semibold  ">
              Get Directions
            </button>
          </div>
          <p className="font-semibold pt-3 w-[200px]">307 E Winslow Road, Bloomington, IN 47401</p>
        </div>
      </section>
      
      <section className="lg:flex lg:pt-5 h-[fit-content] ">

      <div className="bg-red-600 text-white py-10 lg:h-[70vh] ">
        <h3 className="font-semibold text-lg pl-5">Business Hours</h3>
       <ul className="space-y-1 w-[350px] mx-auto">
        <li className="flex items-center ">
          <p className=" w-[35%] text-center ">Mon</p>
          <p className=" w-[35%] text-center ">3:00 - 5:30 PM</p>
        </li>
        <li className="flex items-center ">
          <p className=" w-[35%] text-center ">Tue</p>
          <p className=" w-[35%] text-center ">3:00 - 5:30 PM</p>
        </li>
        <li className="flex items-center ">
          <p className=" w-[35%] text-center ">Wed</p>
          <p className=" w-[35%] text-center ">3:00 - 5:30 PM</p>
        </li>
        <li className="flex items-center ">
          <p className=" w-[35%] text-center ">Thu</p>
          <p className=" w-[35%] text-center ">3:00 - 5:30 PM</p>
        </li>
        <li className="flex items-center ">
          <p className=" w-[35%] text-center ">Fri</p>
          <p className=" w-[35%] text-center ">3:00 - 5:30 PM</p>
        </li>
        <li className="flex items-center  ">
          <p className=" w-[35%] text-center ">Sat</p>
          <p className=" w-[35%] text-center ">Closed</p>
        </li>
        <li className="flex items-center ">
          <p className=" w-[35%] text-center ">Sun</p>
          <p className=" w-[35%] text-center ">12:00 - 5:00 PM</p>
        </li>
       </ul>
      </div>
      <div className="w-full h-72 md:h-[30rem] lg:h-[70vh] maps-bg mt-5 lg:mt-0"></div>
      </section>

    </div>
  );
}
