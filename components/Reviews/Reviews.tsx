import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import ReviewOne from './ReviewOne';
import ReviewTwo from './ReviewTwo';
import ReviewThree from './ReviewThree';
import Link from 'next/link';

export default function Reviews() {

    const rating = useState(5);

  return (
    <div className='h-[fit-content] py-10 '>
        <h2 className='uppercase font-bold text-xl pl-5'>Testimonials</h2>

        <main className='flex flex-col space-y-10 items-center justify-center pt-5 lg:flex-row space-x-20  '>
            <ReviewTwo />
            <ReviewOne />
            <ReviewThree />
        </main>
        <section className='flex items-center justify-center space-x-5 pt-5 md:pt-8 md:space-x-20 md:text-xl'>
            <Link href='https://search.google.com/local/writereview?placeid=ChIJ58nhhFxmbIgRnBBYc_zTgkY'>
                <button className='review-button'>Write a review</button>
            </Link>

            <Link href='https://search.google.com/local/reviews?placeid=ChIJ58nhhFxmbIgRnBBYc_zTgkY'>
                <button className='review-button'>Read More</button>
            </Link>
        </section>
    </div>
  )
}
