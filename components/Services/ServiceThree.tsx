import React from 'react'
import Link from 'next/link'
export default function ServiceThree() {
  return (
    <div className="bg-black pb-5 text-white rounded-lg mx-auto w-[95%] h-[fit-content] ">
      <div className="h-40">
        <img
          src="https://s35691.pcdn.co/wp-content/uploads/2020/01/putting-students-in-the-drivers-seat.jpg"
          className="h-full w-full rounded-t-md object-cover"
          alt="img-one"
        />
      </div>
      <h2 className="font-semibold text-center py-2 text-lg">
        All Star B-T-W Training Drives ($480)
      </h2>
      <ul className="list-disc px-10">
        <li className="text-white text-sm">
        This package is for students (15) years of age or older who have signed up for the state required (30) hours Classroom with a State approved 3rd party online classroom service.
        </li>
        <li className="text-white text-sm">
        It provides (6) hours Behind-The-Wheel Training ONLY with a Certified Instructor at our school location.
        </li>
        <li className="text-white text-sm">
          Register and create Student Account online or in-person with full PAYMENT required to start drive lessons.
        </li>
      </ul>
      <p className="text-sm text-center  mt-2 mb-5 px-5">
        You can access and print the Certificate of Drivers Education (CDE)
        enrollment form from this Website by logging into the Student Account
        online or in person by visiting us at All Star Driving School.{" "}
        <span className="italic font-bold">
          Take CDE FORM, BIRTH CERTIFICATE, SOCIAL SECURITY CARD, and 2 PIECES
          OF STUDENT ID RESIDENCY to the BMV within 21 days prior to class start
          date to the BMV.
        </span>{" "}
        Pass the BMV written exam to obtain permit and begin driving. Drive times can be scheduled immediately by calling (812) 339-9908 during office hours. 
      </p>
      <div className="w-full flex items-center justify-center">
      <Link href='https://allstar-driveschool.onlinedrivers.education/users/new/student'>
          <button className="w-[200px] font-semibold bg-red-600 rounded-md h-14 ">
            Click Here to Register
          </button>
        </Link>
      </div>
    </div>
  )
}
