import React from "react";
import Image from "next/image";

function Gallery() {
  return (
    <div className="h-[fit-content] ">
      <h2 className="uppercase font-bold text-xl pb-5 pl-5">Gallery</h2>
      <section className="flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5 lg:px-5 ">
        <div className="relative h-80 w-[90%] md:h-[35rem] md:w-[80%] lg:w-[35%] lg:h-[30rem] mx-auto ">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipNULp-Kkqh-QJT5oiosRm1lmUGOZ1aebUYne5vN=w768-h768-n-o-v1"
            layout="fill"
            objectFit="cover"
            className=""
            alt="img-one"
          />
        </div>
        <div className="relative h-80 w-[90%] md:h-[35rem] md:w-[80%] lg:w-[35%] lg:h-[30rem] mx-auto ">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipMC4Ta-vgz9KoPyOQ48Lma78jAFDT59djHzXWhh=w768-h768-n-o-v1"
            layout="fill"
            objectFit="cover"
            className=""
            alt="img-one"
          />
        </div>
        <div className="relative h-80 w-[90%] md:h-[35rem] md:w-[80%] lg:w-[35%] lg:h-[30rem] mx-auto ">
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipOAlvL5JxBwSpiwx6_JlA6mdN1qUvswsidtIRGj=w768-h768-n-o-v1"
            layout="fill"
            objectFit="cover"
            className=""
            alt="img-one"
          />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
