import React from 'react'

export default function AboutUs() {
  return (
    <div className='h-[fit-content] bg-red-600 mt-10 py-5 '>
        <h2 className='uppercase font-bold text-white text-xl pl-5'>About Us</h2>
        <h3 className="text-center font-bold uppercase text-base pt-3 text-white md:text-lg lg:text-xl ">Learning to drive is a lifelong skill</h3>
        <p className="px-5 text-center text-sm pt-2 max-w-xl font-semibold mx-auto lg:text-base ">
        All Star Driving School is celebrating 22 years as a Driver Education Training School providing traditional, online, and behind-the-wheel training classes for students of Monroe and surrounding counties. All Star is operated by our highly professional staff that includes current/former administrators, teachers, and coaches licensed and certified by the State of Indiana. All Star welcomes all teens and adults 15 years of age or older interested in obtaining an Indiana Permit and Drivers License.   
        </p>
        <ul className=' text-center pt-2 '>
            <li className='italic text-lg font-bold text-white lg:text-xl'>All Star Driving School</li>
            <li className='font-semibold text-white lg:text-lg'>307 East Winslow Rd</li>
            <li className='font-semibold text-white lg:text-lg'>Bloomington, IN 47401</li>
            <li className='font-semibold text-white lg:text-lg'>Phone: (812) 339-9908</li>
            <li className='font-semibold text-white lg:text-lg'>Email: allstardriveschool@gmail.com</li>
        </ul>
    </div>
  )
}
