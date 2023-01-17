import Link from "next/link";
import {useState} from "react";

export default function ServiceOne() {

  const [show, setShow] = useState(false)

  return (
    <div className="bg-black pb-5 text-white rounded-lg mx-auto w-[95%] md:w-[75%] md:mt-5 h-[fit-content] ">
      <div className="h-40 md:h-[25rem] lg:h-[18rem] ">
        <img
          src="https://s35691.pcdn.co/wp-content/uploads/2020/01/putting-students-in-the-drivers-seat.jpg"
          className="h-full w-full rounded-t-md object-cover lg:object-contain"
          alt="img-one"
        />
      </div>
      <h2 className="font-semibold text-center py-2 text-lg">
        All Star Traditional Package ($475)
      </h2>
      <ul className="list-disc px-10 max-w-sm mx-auto">
        <li className="text-white text-sm">
          This package is for students (15) years of age who are getting their
          permit and license for the first time
        </li>
        <li className="text-white text-sm">
          State required (30) hours of Classroom and (6) hours Behind-The-Wheel
          training completed traditionally at our school location.
        </li>
        <li className="text-white text-sm">
          Classes are throughout the year, during the week, and on Sundays.
        </li>
        <li className="text-white text-sm">
          Register and create a Student Account online or in-person with a{" "}
          <span className="italic">$100 Non-Refundable Deposit</span> to
          guarantee the students seat with the balance due on hte 1st day of
          class.
        </li>
      </ul>
      
      <p className="text-sm text-center max-w-lg mx-auto  mt-2 mb-5 px-5">
        You can access and print the Certificate of Drivers Education (CDE)
        enrollment form from this Website by logging into the Student Account
        online or in person by visiting us at All Star Driving School.{" "}
        <span className="italic font-bold">
          Take CDE FORM, BIRTH CERTIFICATE, SOCIAL SECURITY CARD, and 2 PIECES
          OF STUDENT ID RESIDENCY to the BMV within 21 days prior to class start
          date to the BMV.
        </span>{" "}
        Pass the BMV written exam to obtain permit and begin driving. Drive
        times are scheduled in-class on the 1st day of class.{" "}
      </p>
      <div className="w-full flex items-center justify-center">
      <Link href='https://allstar-driveschool.onlinedrivers.education/users/new/student'>
          <button className="w-[200px] font-semibold bg-red-600 rounded-md h-14 ">
            Click Here to Register
          </button>
        </Link>
      </div>
    </div>
  );
}
