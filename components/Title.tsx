import React from 'react'
import { Cover } from './ui/Cover';

interface TitleProps {
    text?: string;
    className?: string;
    coverText?: string;
}

const Title = ({text, className, coverText}: TitleProps) => {
  return (
    <h1 className="uppercase md:text-center text-xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white flex gap-2 items-center md:justify-center">
        {text}<Cover>{coverText}</Cover>
    </h1>
  )
}

export default Title
