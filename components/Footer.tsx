import React from 'react'
import { TextHoverEffect } from './ui/TextHooverEffect'
import Link from 'next/link'

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='min-h-[30vh] px-4 xl:px-8 text-gray-300'>
      <div>
        <TextHoverEffect text='AMOSRAMDEV'/>
      </div>
 
      <hr className='bg-gradient-to-r from-black-100 via-gray-400 to-black-100 w-full h-[0.8px] border-none'/>
      <div className='flex flex-col md:flex-row items-center justify-between gap-3 text-gray-300 py-10'>
        <p className='text-[8px] md:text-[15px] order-2 md:order-1 text-gray-400'>&copy;{date} Amosramdev.com All Rights Reserved</p>

        <div className='flex items-center gap-4 text-lg md: sidebar-link oder-1 md:order-2'>
              <Link href='#' className='w-6 h-6 flex justify-center items-center logo rounded-md hover:-translate-y-0.5 duration-150 hover:text-gray-400'>
                <FaDiscord/>
              </Link>
              <Link href='#' className='w-6 h-6 flex justify-center items-center logo rounded-md hover:-translate-y-0.5 duration-150 hover:text-gray-400'>
                <FaGithub/>
              </Link>
              <Link href='#' className='w-6 h-6 flex justify-center items-center logo rounded-md hover:-translate-y-0.5 duration-150 hover:text-gray-400'>
                <FaInstagramSquare/>
              </Link>
              <Link href='#' className='w-6 h-6 flex justify-center items-center logo rounded-md hover:-translate-y-0.5 duration-150 hover:text-gray-400'>
                <FaLinkedin/>
              </Link>
            </div>
      </div>
    </div>
  )
}

export default Footer