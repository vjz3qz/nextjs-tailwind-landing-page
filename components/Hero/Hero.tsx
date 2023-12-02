import React from "react";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <div className="opacity-0 animate-fadeIn">

        <div className="flex flex-col items-center justify-center">
    <div className="w-3/4">
        <h2 className="font-allianceRegular text-4xl md:text-5xl lg:text-7xl font-bold">{heading}</h2>
        <p className="py-5 text-lg md:text-2xl font-allianceLight">{message}</p>
    </div>
</div>


<div className="absolute bottom-20 left-0 right-0 flex items-center justify-center">
<Link href="/#testimonials" passHref>
<button className="w-12 h-12 rounded-full border relative group flex items-center justify-center">
  <SlArrowDown />
</button>
</Link>
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
