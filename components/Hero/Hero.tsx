import React from "react";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
      <div className="p-5 text-black z-[2] mt-[-10rem]">
        <div className="opacity-0 animate-fadeIn">
          <div className="flex flex-row items-center justify-center">
            <div className="ml-24 mt-24">
              <h2 className="font-allianceRegular text-3xl md:text-4xl lg:text-5xl font-bold">
                {heading}
              </h2>
              <p className="py-5 text-md md:text-xl font-allianceLight">
                {message}
              </p>
            </div>
            <div className="mt-24 mr-24">
              <Image
                src="/svgs/stethescope.svg"
                alt="SVG"
                width={700}
                height={700}
              />
            </div>
          </div>

          <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center">
            <Link href="/#newsletter" passHref>
              <button className="w-12 h-12 rounded-full relative group flex items-center justify-center">
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
