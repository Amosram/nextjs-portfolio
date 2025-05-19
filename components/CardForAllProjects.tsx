import React from "react";
import { freelanx, lajest, portfolio1, portfolio2, portfolio3, tsaire } from "@/data";
import project1 from '../public/assets/images/project-1.png'
import project2 from '../public/assets/images/project-2.png'
import project3 from '../public/assets/images/project-3.png'
import project4 from '../public/assets/images/project-4.png'
import project5 from '../public/assets/images/project-5.png'
import project6 from '../public/assets/images/project-6.png'


export const allProjectsCard = [
    {
      description: "v1",
      title: "First Portfolio",
      src: project1,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://amosrama.netlify.app/",
      ctaLink2: "https://github.com/Amosram/amosrama",
      content: () => {
        return (
          <>
            <p>
              A minimalist portfolio showcasing core web development skills. Built with vanilla HTML, CSS, and JavaScript, this version focused on clean design, responsive layouts, and lightweight functionality to present projects effectively.
           
            </p>
               <div className='grid grid-cols-4 w-full gap-2'>
                  {
                    portfolio1?.map((item) => (
                      <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                    ))
                  }
              </div>
          </>
          
        );
      },
    },
    {
      description: "v2",
      title: "Second Portfolio",
      src: project5,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://amosram.github.io/amosram-dev/",
      ctaLink2: "https://github.com/Amosram/amosram-dev",
      content: () => {
        return (
          <>
            <p>
             An upgraded portfolio leveraging React for dynamic UI and Vite for fast development. Integrated Framer Motion for smooth animations and Tailwind CSS for rapid, utility-first styling. This version emphasized interactivity and modern design trends.
           
            </p>
              <div className='grid grid-cols-4 w-full gap-2'>
                  {
                    portfolio2?.map((item) => (
                      <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                    ))
                  }
              </div>
          </>
          
        );
      },
    },
    {
      description: "v3",
      title: "Latest Portfolio",
      src: project6,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://amosramdev.vercel.app/",
      ctaLink2: "https://github.com/Amosram/nextjs-portfolio",
      content: () => {
        return (
          <>
            <p>
             A robust, production ready portfolio powered by Next.js for server side rendering and optimized performance. Written in TypeScript for enhanced type safety and scalability, this version delivers a polished user experience with latest UI design and SEO capabilities.   
           
            </p>
              <div className='grid grid-cols-4 w-full gap-2'>
                  {
                    portfolio3?.map((item) => (
                      <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                    ))
                  }
              </div>
          </>
          
        );
      },
    },
    {
      description: "Device Specs",
      title: "Lajest",
      src: project2,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://lajest.vercel.app/",
      ctaLink2: "https://github.com/Amosram/lajest",
      content: () => {
        return (
            <>
            <p>
              Lajest is a sleek and user-friendly application designed to display detailed device specifications in an intuitive format. Whether you&apos;re a tech enthusiast, developer, or casual user, Lajest provides a comprehensive overview of your device&apos;s hardware and software details, including processor, memory, storage, display, and operating system information.
           
            </p>
              <div className='grid grid-cols-4 w-full gap-2'>
                  {
                    lajest?.map((item) => (
                      <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                    ))
                  }
              </div>
          </>
        );
      },
    },
  
    {
      description: "Eccomerce",
      title: "Thinksmoothie",
      src: project3,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://tsaire.vercel.app/",
      ctaLink2: "https://github.com/Amosram/tsaire",
      content: () => {
        return (
            <>
            <p>
              is a vibrant online platform dedicated to selling delicious smoothies and fresh fruit juices. With an intuitive interface, it offers a wide range of customizable, healthy drink options, highlighting natural ingredients and nutritional benefits. Perfect for health-conscious customers seeking refreshing, on-the-go beverages. 
            </p>
              <div className='grid grid-cols-4 w-full gap-2'>
                  {
                    tsaire?.map((item) => (
                      <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                    ))
                  }
              </div>
          </>
        );
      },
    },
    {
      description: "Job Platform",
      title: "Freelanx",
      src: project4,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://freelanx.vercel.app/",
      ctaLink2: "https://github.com/Amosram/freelanx",
      content: () => {
        return (
            <>
            <p>
            Freelanx is an innovative job platform designed to connect freelancers with projects that match their expertise. It features a user-friendly interface for discovering, applying, and managing freelance opportunities, enabling professionals to highlight their skills and businesses to efficiently source top talent.
            </p>
              <div className='grid grid-cols-4 w-full gap-2'>
                  {
                    freelanx?.map((item) => (
                      <p key={item.name} className="bg-white/70 text-black text-sm text-center rounded-[20px] px-3 py-[3px]">{item?.name}</p>
                    ))
                  }
              </div>
          </>
        );
      },
    },
  ];