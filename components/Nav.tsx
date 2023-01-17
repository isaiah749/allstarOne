import { useState } from "react";
import Image from "next/image";
import menuIcon from "../styles/icons/menu-icon.svg";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="w-full bg-white sticky z-30 top-0 left-0 h-16 px-4 flex items-center justify-between ">
        <h1 className="font-semibold italic font-serif text-[1.1rem] md:text-[1.45rem] text-red-600 ">
          All Star Driving School
        </h1>
        <div className="relative flex-shrink-0 h-7 w-7 lg:hidden ">
          <Image
            onClick={() => setOpen(!open)}
            src={menuIcon}
            layout="fill"
            objectFit="contain"
            alt="menuIcon"
          />
        </div>
        <div className="hidden lg:block">
      <ul className="flex items-center justify-center space-x-5">
          <Link href="#services">
              <li
                className='text-red-600 text-xl font-bold hover:text-red-500 transition-all ease-in-out duration-300'
              >
                Packages
              </li>
            </Link>
            <Link href="#about">
              <li
                className='text-red-600 text-xl font-bold hover:text-red-500 transition-all ease-in-out duration-300'
              >
                About Us
              </li>
            </Link>
            <Link href="#reviews">
              <li
                className='text-red-600 text-xl font-bold hover:text-red-500 transition-all ease-in-out duration-300'
              >
                Testimonials
              </li>
            </Link>
            <Link href="#gallery">
              <li
                className='text-red-600 text-xl font-bold hover:text-red-500 transition-all ease-in-out duration-300'
              >
                Gallery
              </li>
            </Link>
            <Link href="#contact">
              <li
                className='text-red-600 text-xl font-bold hover:text-red-500 transition-all ease-in-out duration-300'
              >
                Contact
              </li>
            </Link>
          </ul>
      </div>
      </div>

      

      {/* Mobile Links */}
      <div className="block relative lg:hidden">
        <div
          className={
            open
              ? "z-20  pt-3 fixed top-[60px] backdrop-blur-lg w-[75%] md:w-[50%] left-0 h-screen transition-all ease-in-out duration-150 "
              : "-left-[300px] -z-10 h-0 w-0 "
          }
        >
          <ul className="">
          <Link href="#services">
              <li
                className={
                  open
                    ? "text-xl border-b-2 py-2 w-full border-red-600 font-bold text-red-600 pl-2"
                    : "hidden"
                }
              >
                Packages
              </li>
            </Link>
            
            <Link href="#about">
              <li
                className={
                  open
                    ? "text-xl border-b-2 py-2 w-full border-red-600 pt-5 font-bold text-red-600 pl-2"
                    : "hidden"
                }
              >
                About Us
              </li>
            </Link>
            <Link href="#reviews">
              <li
                className={
                  open
                    ? "text-xl border-b-2 py-2 w-full border-red-600 font-bold text-red-600 pt-5 pl-2"
                    : "hidden"
                }
              >
                Testimonials
              </li>
            </Link>

            <Link href="#gallery">
              <li
                className={
                  open
                    ? "text-xl border-b-2 py-2 pt-5 w-full border-red-600 font-bold text-red-600 pl-2"
                    : "hidden"
                }
              >
                Gallery
              </li>
            </Link>
            <Link href="#contact">
              <li
                className={
                  open
                    ? "text-xl border-b-2 py-2 pt-5 w-full border-red-600 font-bold text-red-600 pl-2"
                    : "hidden"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="relative h-full">
            <div className="flex items-center justify-between px-2 md:px-5 absolute bottom-[22rem] md:bottom-[36rem] left-0 w-full ">
              <Link href="https://allstar-driveschool.onlinedrivers.education/login">
                <button className="bg-red-600 text-white font-semibold w-[fit-content] rounded-md p-2 ">
                  Login/Register
                </button>
              </Link>
              <Link href="https://docs.google.com/document/d/1CvFGcMcQWBbh6zfr1F3Tby6bOXwJcSJIt6H9eexiImA/edit?usp=sharing&_ga=2.31734910.1593283372.1611611625-113837189.1554859220">
                <button className="bg-red-600 text-white font-semibold w-[fit-content] rounded-md p-2 ">
                  Class Schedule
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
