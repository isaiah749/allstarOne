import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

export default function ReviewOne() {
  return (
    <div className="bg-white text-red-600 rounded-lg w-[300px] shadow-lg shadow-gray-400 h-[fit-content] pb-5 ">
    <div className=" w-full h-10 flex items-center justify-start space-x-2 ">
        <div className="flex items-center pl-3 ">
        <StarIcon className='h-5  text-yellow-400' />
        <StarIcon className='h-5  text-yellow-400' />
        <StarIcon className='h-5  text-yellow-400' />
        <StarIcon className='h-5  text-yellow-400' />
        <StarIcon className='h-5  text-yellow-400' />
        </div>
        <div className="">
            <p className='text-sm text-gray-500'>
                A year ago
            </p>
        </div>
    </div>
    <p className='italic -mt-2 pl-5 text-black font-semibold lg:text-lg'>Eric S</p>
    <p className='text-sm text-center px-5 lg:text-base'>&#34;I took the Teen Driver Ed course when I was 15. I am now 21. I have a sailing license, a motorcycle endorsement, and am working on a private pilots license. The instructors at All Star Driving School are hands down the best instructors I have ever had the privilege to learn under. Not only do I consciously use what All Star taught me when i'm driving every day, but I have extremely fond memories of learning to drive with them. There is no question in my mind that myself, my passengers, and those around me on the roadway are safer thanks to the folks at All Star Driving School and their commitment to safe, fun, and quality drivers education.&#34;</p>
</div>
  )
}
