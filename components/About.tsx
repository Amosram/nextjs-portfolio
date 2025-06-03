import React from 'react'
import { CardDemo } from './ui/CardDemo';
import Title from './Title';


const About = () => {
  return (
    <section className='min-h-screen px-4 lg:16 xl:px-32 lg:pt-8 ' id='about'>
      <div className='border-b border-b-white/10 rounded-[20px] pb-20'>
        <Title text='explore more' coverText='ABOUT ME' className='text-center'/>

        <div className='flex flex-col lg:flex-row gap-8 mt-4'>
          <div>
            <CardDemo/>
          </div>

          <div className='flex flex-col gap-2 text-neutral-400 w-full mx-auto py-4 px-4 lg:-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'>
            <p>
              I’m Amos, a passionate <span className='text-neutral-200'>Junior Software Engineer</span> specializing in <span className='text-neutral-200'>Full Stack Web Development.</span> With a strong foundation in <span className='text-neutral-200'>MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) and expertise in <span className='text-neutral-200'>Next.js</span>, Tailwind CSS, and dynamic UI design, I craft intuitive, scalable, and efficient web applications
            </p>

            <p>
              I thrive on solving complex problems with clean, maintainable code, whether it’s designing seamless front-end experiences, optimizing back-end performance, or integrating <span className='text-neutral-200'>APIs</span> for robust functionality. My approach blends creativity with technical precision, ensuring every project delivers efficiency, scalability, and a great user experience.
            </p>

            <p>
              Driven by continuous learning and innovation, I stay ahead of the latest technologies to build future-ready solutions. Let’s collaborate and turn great ideas into high-performance digital experiences!
            </p>

            <p>
              When I’m not coding, you’ll find me playing football or watching tech related videos on youTube for latest technologies and some bloomberg business news. I also enjoy contributing to open-source projects and engaging with the tech community through meetups, social platforms like <span className='text-neutral-200'>Linkedin</span> or online forums like <span className='text-neutral-200'>Stack Overflow.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About