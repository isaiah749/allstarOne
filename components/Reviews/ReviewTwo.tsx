import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

export default function ReviewTwo() {
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
                7 months ago
            </p>
        </div>
    </div>
    <p className='italic -mt-2 pl-5 text-black font-semibold lg:text-lg'>Amardeep K</p>
    <p className='text-sm text-center lg:text-base px-5'>&#34;They are very good at training students. I really enjoyed my time with Austin and Dave.&#34;</p>
</div>
  )
}
