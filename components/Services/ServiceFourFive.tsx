import React from 'react'

interface ServicesContentTwo {
  id: Number
  imageUrl: string
  title: string
  contentOne: string
  contentTwo: string
}

export default function ServiceFour({ imageUrl, title, contentOne, contentTwo }: ServicesContentTwo) {

  return (
    <div className="bg-black pb-5 text-white rounded-lg mx-auto  w-[95%] md:w-[75%] h-[fit-content] ">
    <div className="h-40 md:h-[20rem] md:-mt-2 lg:mt-0">
      <img
        src={imageUrl}
        className="h-full w-full rounded-t-md md:rounded-t-xl object-cover md:object-contain"
        alt="img-one"
      />
    </div>
    <h2 className="font-semibold text-center py-2 text-lg md:text-xl">
      {title}
    </h2>
    <p className='text-sm text-center mt-2 mb-5 px-5 max-w-sm mx-auto'>
    {contentOne}
    </p>
    <p className="text-sm text-center  mt-2 mb-5 px-5 max-w-sm mx-auto">
    {contentTwo}
    </p>
  </div>
  )
}
