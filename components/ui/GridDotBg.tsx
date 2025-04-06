import { cn } from "@/lib/utils";
import React from "react";
import TailwindBtn from "./TailwindBtn";
import { ColourfulText } from "./ColorfulText";
import Link from "next/link";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute -top-20 w-full inset-0 flex items-center flex-col justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100">
      </div>
      
      <div className="z-20 flex flex-col gap-3 lg:gap-1 md:justify-center md:items-center px-4 lg:px-0">
        <h1 className="text-4xl md:text-6xl">{`Hi, I'm Amos Rama`}</h1>
        <h1 className="flex gap-2 text-5xl md:text-6xl items-center mb-2">
          <span>
            <ColourfulText text='A Full Stack Developer'/>
          </span>
        </h1>
        <p className="text-lg dark:text-neutral-300">Building cutting-edge web experiences that inspire and deliver.</p>

        <div className="flex gap-4">
          <Link href='/#contact'>
            <TailwindBtn text="See My Work"/>
          </Link>
          <TailwindBtn text="Donlwoad Resume"/>
        </div>
      </div>
    </div>
  );
}


