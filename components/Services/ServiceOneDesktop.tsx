import Link from "next/link";
import React from "react";

export default function ServiceOneDesktop() {
  return (
    <div className="bg-black pb-5 text-white rounded-lg mx-auto w-[95%] flex  md:w-[75%] lg:w-[60%] md:mt-5 h-[300px] ">
      <div className="relative w-[400px] h-[300px]">
        <img
          src="https://s35691.pcdn.co/wp-content/uploads/2020/01/putting-students-in-the-drivers-seat.jpg"
          className="h-full w-full rounded-t-md object-cover"
          alt="img-one"
        />
      </div>

      <div className="flex-grow flex-1">
        <h2 className="text-center font-bold text-xl pt-1">All Star Traditional Package ($475)</h2>
        <ul className="list-disc px-10 max-w-sm mx-auto pt-2">
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
      </div>

    </div>
  );
}
