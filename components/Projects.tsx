import React from 'react'
import Title from './Title'
import { ExpandableCardDemo } from './ProjectCard'

const Projects = () => {
  return (
    <section className='min-h-screen px-4 lg:px-16 xl:px-32' id='projects'>
      <div>
        <Title text='Take a look at ' coverText='MY WORK'/>
      </div>
      <div>
        <ExpandableCardDemo/>
      </div>
    </section>
  )
}

export default Projects
