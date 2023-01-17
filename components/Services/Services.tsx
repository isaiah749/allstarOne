import React from 'react'
import ServiceFive from './ServiceFive'
import ServiceFourFive from './ServiceFourFive'
import ServiceOne from './ServiceOne'
import ServiceThree from './ServiceThree'
import ServiceTwoThree from './ServiceTwoThree'
import servicesTwoThreeData from '../../context/servicesTwo.json'
import servicesFourFiveData from '../../context/servicesThree.json'
import ServiceOneDesktop from './ServiceOneDesktop'

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

interface ServicesContentTwo {
  id: Number
  imageUrl: string
  title: string
  contentOne: string
  contentTwo: string
}

export default function Services() {
  return (
    <div className='h-[fit-content] pt-10 overflow-y-hidden '>
        <h2 className='uppercase font-bold text-xl pl-5'>Packages</h2>

        <main className='grid grid-cols-1 h-[fit-content] gap-y-5 mx-auto pt-2 w-[95%] lg:w-[100%] lg:grid-cols-2 '>
          <div className="">
            <ServiceOne />
          </div>
          {/* <div className="hidden lg:block">
            <ServiceOneDesktop />
          </div> */}
          {servicesTwoThreeData.map(({ id, imageUrl, title, listItemOne, listItemTwo, listItemThree, stateInfoStart, stateInfoMiddleBold, stateInfoEnd, signupUrl }: ServicesContent) => (
            <ServiceTwoThree key={id} imageUrl={imageUrl} title={title} listItemOne={listItemOne} listItemTwo={listItemTwo} listItemThree={listItemThree} stateInfoStart={stateInfoStart} stateInfoMiddleBold={stateInfoMiddleBold} stateInfoEnd={stateInfoEnd} signupUrl={signupUrl} />
          ))}

          {servicesFourFiveData.map(({ id, imageUrl, title, contentOne, contentTwo }: ServicesContentTwo) => (
            <ServiceFourFive key={id} imageUrl={imageUrl} title={title} contentOne={contentOne} contentTwo={contentTwo} />
          ))}

        </main>
    </div>
  )
}
