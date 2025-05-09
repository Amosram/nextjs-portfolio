"use client";
import { MaskContainer } from "./ui/SvgMaskEffect";


export function SVGMaskEffectDemo() {
  return (
    <div className="flex flex-col h-[40rem] w-full lg:items-center lg:justify-center overflow-hidden px-4 lg:px-16 xl:px-32">
      
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl md:text-center text-4xl lg:text-5xl text-slate-700 dark:text-white uppercase">
            Any fool can write code that a computer can understand, but a good programmer always writes code that humans can understand.
          </p>
        }
        className="h-[40rem] rounded-md text-white dark:text-black"
      >
        The importance of {" "}
        <span className="text-green-500">clean, readable code and collaboration</span> are literally the core principles of {" "}
        <span className="text-green-500">software engineering</span>.
      </MaskContainer>
    </div>
  );
}
