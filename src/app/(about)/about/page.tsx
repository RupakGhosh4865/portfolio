"use client";
import { Button } from "@/components/ui/moving-border";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import React from "react";
import { CardHoverEffectDemo } from "../components/CardHoverEffectDemo";
import { CardHoverReveal } from "../components/CardHoverReveal";
import Education from "../components/Education";

const page = () => {
  const words = [
    {
      text: "About",
    },
    {
      text: "Me :",
    },
  ];

  
  return (
    <div className="min-h-screen mt-48 sm:mt-20">
      <div className="about flex flex-col-reverse justify-center sm:flex-row  h-full m-4 sm:p-20 sm:mx-10">
        <div className="left w-full sm:w-[65%] ">
          <div className=" sm:m-8 p-4">
            {/* Typing */}
            <div>
              <TypewriterEffectSmooth words={words} />
            </div>

            {/* Main Content */}
            <div>
              <h1 className="font-bold text-[17px] sm:text-xl tracking-wider text-gray-300">
                I&apos;m a Mern stack,Next-Js developer with a passion for building top-notch
                websites. I&apos;ve a solid understanding of both Frontend and
                Backend development and I can&apos;t wait to utilize my skills in the
                workplace. I&apos;m a quick learner and am certain that I can be a
                valueable asset to any web development team.
              </h1>
            </div>

            {/* Buttons */}
            <div className="mt-8">
              <Link href={"https://www.linkedin.com/in/rupak-ghosh-949258244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "} target="_blank">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-medium tracking-wider text-[16px]"
                >
                  Follow Me !
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="rightside flex justify-center items-center sm:w-[30%] ">
          <div className="right  border-2 border-blue-300/35 flex justify-center items-center"></div>
        </div>
      </div>

      {/* SKILLS */}
      <div className=" sm:p-4 sm:m-4">
        <h1 className="mt-6 py-2 text-4xl md:text-5xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40 bg-opacity-50 capitalize">
          My Skills !
        </h1>
        <CardHoverEffectDemo />

        <div className="text-center">
          <Link href={"/projects"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-medium tracking-wider text-[16px]"
            >
              My Works !
            </Button>
          </Link>
        </div>
      </div>

      {/* Services */}
      <div className="mt-10">
        <h1 className="mt-6 py-2 text-4xl md:text-5xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40 bg-opacity-50 capitalize">
          What I Know !
        </h1>
        <CardHoverReveal />
      </div>

      {/* Education */}
      <div className="  m-4 p-4">
        <h1 className="mt-6 py-2 text-4xl md:text-5xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-blue-400/40 bg-opacity-50 capitalize">
          Educations..!
        </h1>
        <Education />
      </div>
    </div>
  );
};

export default page;
