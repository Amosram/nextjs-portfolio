import { cn } from "@/lib/utils";
import React from "react";
import { ColourfulText } from "./ColorfulText";
import Link from "next/link";
import ButtonBgBlack from "./ButtonBgBlack";
import ButtonBgWhite from "./ButtonBgWhite";
import Image from 'next/image';
import bizPic from "@/public/assets/images/bizPic.jpg";
import { FlipWords } from "./FlipWords";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex min-h-[80vh] lg:min-h-screen w-full items-center justify-center bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute -top-20 w-full inset-0 flex items-center flex-col justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100">
      </div>
      
      <div className="z-20 flex flex-col uppercase gap-3 lg:gap-5 md:justify-center md:items-center px-4 lg:px-0">
        <div className="flex gap-2 items-center text-sm border border-white/30 rounded-full pr-2 shadow-md w-fit bg-black-100/10 backdrop-blur-sm">
          <Image
            src={bizPic}
            alt="Project 1 Screenshot"
            width={30}
            height={30}
            className="rounded-full border-2 border-white/30 object-cover"
          />
          <FlipWords words={["Habari, mimi ni Amos Rama ","Hi, I am Amos Rama","Hola, soy Amos Rama","Bonjour, je suis Amos Rama", "Nǐ hǎo, wǒ shì Āmòsī Lāmǎ", "Namaste, main Amos Rama hoon"]}/>
          
        </div>
        <h1 className="text-4xl md:text-7xl md:text-center lg:max-w-[800px] leading-[1.2] lg:leading-[1] mb-3 lg:mb-0 text-neutral-200">Building Scalable & Intelligent Web Solutions</h1>
        <h1 className="flex gap-2 text-3xl md:text-4xl items-center mb-2">
          <span>
            <ColourfulText text='with full stack development'/>
          </span>
        </h1>
        {/* <p className="text-lg font-normal dark:text-neutral-400">for scalable, secure and robust web apps.</p> */}

        <div className="flex gap-4 mt-3 lg:mt-0">
          <Link href='/#projects'>
            <ButtonBgWhite text='See My Work'/>
          </Link>
          <Link href='/#contact'>
            <ButtonBgBlack text='Contact Me'/>
          </Link>

        </div>
      </div>
    </div>
  );
}


