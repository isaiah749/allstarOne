import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

export default function ReviewThree() {
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
    <p className='italic -mt-2 pl-5 text-black font-semibold lg:text-lg'>Tashina A</p>
    <p className='text-sm text-center px-5 lg:text-base'>&#34;We sent our son to All Star. He really enjoyed his experience. They are very helpful. And I'm impressed with my sons driving and knowledge. Thanks All Star!&#34;</p>
</div>
  )
}
