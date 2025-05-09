'use client';

import Link from 'next/link'
import React, { useState } from 'react'

import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";





const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  } 

  return (
    <div className='absolute top-0 left-0 z-40 right-0'>
      <header className='hidden text-gray-300 font-[600] lg:flex justify-between items-center px-8 py-3 w-[80vw] navbar rounded-[30px] mt-2 mx-auto header backdrop-blur'>
      <Link href='/' className='rounded-[20px] py-[3px] shadow-sm px-4 logo'>AmosramDev</Link>

        <nav className='hidden lg:flex gap-1'>
          <Link href='/' className='hover:gradient-button hover:text-neutral-400 rounded-[20px] py-[3px] px-4 links'>Home</Link>
          <Link href='/#projects' className='rounded-[20px]  hover:text-neutral-400  py-[3px] px-4 links'>Projects</Link>
          <Link href='/#about' className='rounded-[20px]  hover:text-neutral-400  py-[3px] px-4 links'>About</Link>
          <Link href='/#contact' className='rounded-[20px]  hover:text-neutral-400  py-[3px] px-4 links'>Contact</Link>
        </nav>
      </header>

      <header className='flex text-gray-300 font-[600] lg:hidden justify-between items-center px-4 py-3 w-full rounded-[30px] mt-2 mx-auto relative'>
        <Link href='/' className='rounded-md py-[3px] shadow-sm lg:shadow-none px-4 logo'>AmosramDev</Link>

        {
          menuOpen && 
          <nav className={`${menuOpen ? 'opacity-100 ' : 'opacity-0 hidden'}  fixed top-0 left-0 text-lg md:text-2xl w-full h-screen text-gray-300 flex flex-col items-center justify-between gap-4 py-20 side-bar backdrop-blur-lg z-20 transition-opacity duration-500 ease-in-out`}>

            <div className='flex flex-col items-center gap-4'>
              <Link href='/ ' onClick={toggleNav} className='sidebar-link hover:gradient-button hover:text-gray-400 rounded-[20px] py-[3px] px-4'>Home</Link>
              <Link href='/projects' onClick={toggleNav} className='sidebar-link rounded-[20px] py-[3px] px-4 hover:text-gray-400'>Projects</Link>
              <Link href='/#about' onClick={toggleNav} className='sidebar-link rounded-[20px] py-[3px] px-4 hover:text-gray-400'>About</Link>
              <Link href='/#contact' onClick={toggleNav} className='sidebar-link rounded-[20px] py-[3px] px-4 hover:text-gray-400'>Contact</Link>
            </div>

            <div className='flex items-center gap-4 text-lg md: sidebar-link mb-4'>
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

       

            <IoClose className='absolute top-4 right-0 mx-4 hover:cursor-pointer logo text-3xl py-[3px] rounded-md shadow-sm w-[40px] ' onClick={toggleNav}/>
          </nav>
        }
      

        <LuMenu className=' hover:cursor-pointer logo text-3xl py-[3px] rounded-md shadow-sm w-[40px] ' onClick={toggleNav}/>
      </header>
    </div>
  )
}

export default Navbar