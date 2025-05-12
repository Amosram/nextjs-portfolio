import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip2";
import { ProjectOneIcons } from "@/data";
import project1 from '../public/assets/images/project-1.png'
import project2 from '../public/assets/images/project-2.png'
import project3 from '../public/assets/images/project-3.png'
import project4 from '../public/assets/images/project-4.png'


export const cards = [
    {
      description: "V1",
      title: "Portforlio Site",
      src: project1,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://ui.aceternity.com/templates",
      ctaLink2: "https://github.com",
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
      description: "Device Specs",
      title: "Lajest",
      src: project2,
      ctaText: "Code",
      ctaText2: "Preview",
      ctaLink: "https://ui.aceternity.com/templates",
      ctaLink2: "https://github.com",
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
      ctaLink: "https://ui.aceternity.com/templates",
      ctaLink2: "https://github.com",
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
      ctaLink: "https://ui.aceternity.com/templates",
      ctaLink2: "https://github.com",
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