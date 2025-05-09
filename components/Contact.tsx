import React from 'react'

import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { BackgroundGradientAnimation } from './ui/BgGradientAnimation';


const Contact = () => {
  return (
    <section className='px-4 lg:px-16 xl:px-32 pt-10' id='contact'>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center w-full  md:min-h-[70vh] min-h-[80vh] justify-between gap-8 rounded-xl border border-white/10 shadow-xl'>
            <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-5xl text-center lg:text-7xl">
                    <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Contact Me
                         <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-base">
                           Have a project idea, collaboration request, or just want to chat about tech? I&apos;d love to hear from you!
                        </p>
                    </p>
                   
                </div>
            </BackgroundGradientAnimation>

            <div className='py-12 lg:py-0 lg:min-h-[80vh] px-4'>
                <h2 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white text-4xl my-6'>Reach Me Via</h2>    

                <div className='flex flex-col gap-4 '>
                    <div>
                        <h4 className='mb-1'>Email & Phone</h4>
                        <div className='flex flex-col gap-2'>
                            <Link href="mailto:amosramdev@gmail.com" className='flex items-center gap-2'>
                                <FaEnvelope className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                <span className='text-neutral-400'>amosramdevgmail.com</span>
                            </Link>
                            <Link href="tel:+254752943240" target='_blank' className='flex items-center gap-2'>
                                <FaPhoneAlt className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                <span className='text-neutral-400'>+254 752 943 240</span>
                            </Link>
                    </div>

                    </div>

                    <p>or</p>

                    <div>
                        <h4 className='mb-1'>Social</h4>
                        <div className='flex flex-col gap-2'>
                            <Link href="#" className='flex hover:text-neutral-700 items-center gap-2'>
                                <FaGithub className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                <span className='text-neutral-400'>Github</span>
                            </Link>
                            <Link href="#" className='flex hover:text-neutral-700 items-center gap-2'>
                                <FaLinkedin className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                <span className='text-neutral-400'>LinkedIn</span>
                            </Link> 
                            <Link href="#" className='flex hover:text-neutral-700 items-center gap-2'>
                                <RiTwitterXFill className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                <span className='text-neutral-400'>Twitter</span>        
                            </Link>
                            <Link href="#" className='flex hover:text-neutral-700 items-center gap-2'>
                                <FaInstagram className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                <span className='text-neutral-400'>Instagram</span>
                            </Link>


                        </div>

                    </div>
                
                </div>    
                
            </div>
        </div>
      
    </section>
  )
}

export default Contact
