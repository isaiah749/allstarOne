import React from "react";

export default function Main() {
  return (
    <div className="bg-[#000]/90 h-[fit-content] overflow-y-hidden pt-[4rem] w-full flex-col">
      <section className="md:hidden">
      <div className="h-[40vh] text-white pt-[1rem] ">
        <ul className="-space-y-1 pt-5">
          <li className="cta-text">All Star Driving School</li>
          <li className="cta-text">Driver License Training School</li>
          <li className="cta-text">Located in Bloomington IN</li>
          <li className="cta-text">Opens at 3:00 PM</li>
        </ul>
        <div className="w-full mt-3 h-[100px] space-x-3 flex items-center justify-center">
          <button className="w-[150px] bg-red-600 text-white  font-semibold h-14 rounded-md ">
            Call (812) 339-9908
          </button>
          <button className="w-[150px] bg-red-600 text-white  font-semibold h-14 rounded-md ">
            Class Schedule
          </button>
        </div>
      </div>
      <div className="h-[60vh] relative  ">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipOAlvL5JxBwSpiwx6_JlA6mdN1qUvswsidtIRGj=w1080-h608-p-no-v0"
          alt="hero"
          className="object-cover h-full w-full"
        />
      </div>
      </section>

      <section className="hidden md:block relative h-[75vh] lg:h-[100vh] ">
      <img
          src="https://lh3.googleusercontent.com/p/AF1QipOAlvL5JxBwSpiwx6_JlA6mdN1qUvswsidtIRGj=w1080-h608-p-no-v0"
          alt="hero2"
          className="object-cover h-full w-full"
        />

        <div className="absolute bottom-40 left-0 right-0 mx-auto rounded-lg h-[fit-content] py-10 w-[600px] bg-white bg-opacity-70  ">
          <h2 className="text-red-600 font-bold text-center pt-3 italic text-4xl">All Star Driving School</h2>
          <ul className="text-center py-2">
            <li className="font-bold text-xl">Driver License Training School</li>
            <li className="font-bold text-xl">Located in Bloomington IN</li>
            <li className="font-bold text-xl">Opens at 3:00 PM</li>
          </ul>
          <div className="flex items-center justify-center h-[100px] space-x-10 ">
          <button className="w-[150px] bg-red-600 text-white  font-semibold h-14 rounded-md ">
           Login/Register
          </button>
          <button className="w-[150px] bg-red-600 text-white  font-semibold h-14 rounded-md ">
            Class Schedule
          </button>
          </div>
        </div>

      </section>
      
    </div>
  );
}
