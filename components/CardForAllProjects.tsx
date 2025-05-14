import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip2";
import { ProjectOneIcons } from "@/data";
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
              <div className='flex w-full'>
                <AnimatedTooltip items={ProjectOneIcons}/>
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
              <div className='flex w-full'>
                <AnimatedTooltip items={ProjectOneIcons}/>
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
              <div className='flex w-full'>
                <AnimatedTooltip items={ProjectOneIcons}/>
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
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for
            her melancholic and cinematic music style. Born Elizabeth Woolridge
            Grant in New York City, she has captivated audiences worldwide with
           
            </p>
              <div className='flex w-full'>
                <AnimatedTooltip items={ProjectOneIcons}/>
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
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for
            her melancholic and cinematic music style. Born Elizabeth Woolridge
            Grant in New York City, she has captivated audiences worldwide with
           
            </p>
              <div className='flex w-full'>
                <AnimatedTooltip items={ProjectOneIcons}/>
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
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for
            her melancholic and cinematic music style. Born Elizabeth Woolridge
            Grant in New York City, she has captivated audiences worldwide with
           
            </p>
              <div className='flex w-full'>
                <AnimatedTooltip items={ProjectOneIcons}/>
              </div>
          </>
        );
      },
    },
  ];