import React from 'react'
import { TextHoverEffect } from './ui/TextHooverEffect'
import Link from 'next/link'

import { FaCircle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='min-h-[30vh] px-4 xl:px-8 text-gray-300'>
      <div>
        <TextHoverEffect text='AMOSRAMDEV'/>
      </div>
 
      <hr className='bg-gradient-to-r from-black-100 via-gray-400 to-black-100 w-full h-[0.8px] border-none'/>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 text-gray-300 pt-10 pb-5 lg:py-10'>
        <p className='text-[8px] md:text-[15px] order-3 md:order-2 text-gray-400 '>&copy;{date} Amosramdev.com All Rights Reserved</p>

        <p className='text-[8px] md:text-[15px] text-gray-400 flex items-center gap-2 order-1 md:order-1'>
          <div className='relative flex items-center justify-center'>
            <FaCircle  className='animate-pulse text-[16px] text-green-800/70'/>
            <FaCircle  className='absolute text-[6px] text-green-500 animate-pulse-fast'/>
          </div>
          <span>Nairobi, Kenya</span>
        </p>

        <div className='flex items-center gap-2 text-lg md: sidebar-link order-2 md:order-3'>
            <Link href="#" className='flex hover:text-neutral-700 items-center gap-2'>
                <FaGithub className='text-2xl w-8 h-8 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
      
            </Link>
            <Link href="#" className='flex hover:text-neutral-700 items-center gap-2'>
                <FaLinkedin className='text-2xl w-8 h-8 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
              
            </Link> 
            <Link href="#" className='flex hover:text-neutral-700 items-center gap-2'>
                <RiTwitterXFill className='text-2xl w-8 h-8 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
            
            </Link>
            <Link href="#" className='flex hover:text-neutral-700 items-center gap-2'>
                <FaInstagram className='text-2xl w-8 h-8 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
             
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer