import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip2";
import { ProjectOneIcons } from "@/data";

export const cards = [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Code",
      ctaText2: "Live Demo",
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
      description: "Babbu Maan",
      title: "Mitran Di Chhatri",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      ctaText: "Code",
      ctaText2: "Live Demo",
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
      description: "Metallica",
      title: "For Whom The Bell Tolls",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Code",
      ctaText2: "Live Demo",
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
      description: "Lord Himesh",
      title: "Aap Ka Suroor",
      src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
      ctaText: "Code",
      ctaText2: "Live Demo",
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