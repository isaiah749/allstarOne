import React from 'react'
import Link from 'next/link'

interface ServicesContent {
  id: Number
  imageUrl: string
  title: string
  listItemOne: string
  listItemTwo: string
  listItemThree: string
  stateInfoStart: string
  stateInfoMiddleBold: string
  stateInfoEnd: string
  signupUrl: string
}

export default function ServiceTwo({ id, imageUrl, title, listItemOne, listItemTwo, listItemThree, stateInfoStart, stateInfoMiddleBold, stateInfoEnd, signupUrl }: ServicesContent) {
  return (
    <div className="bg-black pb-5 text-white rounded-lg mx-auto w-[95%] md:w-[75%] h-[fit-content] ">
      <div className="h-40 md:h-[20rem] md:-mt-2 lg:mt-0 ">
        <img
          src={imageUrl}
          className="h-full w-full rounded-t-md md:rounded-t-xl object-cover md:object-contain"
          alt="img-one"
        />
      </div>
      <h2 className="font-semibold text-center mt-5 py-1 text-lg md:text-xl md:mt-0 md:py-3">
        {title} 
      </h2>
      <ul className="list-disc px-10 max-w-sm mx-auto">
        <li className="text-white text-sm">
          {listItemOne}
        </li>
        <li className="text-white text-sm">
          {listItemTwo}
        </li>
        <li className="text-white text-sm">
        {listItemThree}
        </li>
      </ul>
      <p className="text-sm text-center max-w-lg mx-auto  mt-2 mb-5 px-5">
        {stateInfoStart}{" "}
        <span className="italic font-bold">
          {stateInfoMiddleBold}
        </span>{" "}
        {stateInfoEnd}    
      </p>
      <div className="w-full flex items-center justify-center">
        <Link href={signupUrl}>
          <button className="w-[200px] font-semibold bg-red-600 rounded-md h-14 ">
            Click Here to Register
          </button>
        </Link>
      </div>
    </div>
  )
}



