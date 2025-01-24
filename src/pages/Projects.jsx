import React, { useRef, useState, useEffect } from 'react'
import { sumArray } from '../utilities/helper';
import {projects} from '../data.js'
import ProjectCard from '../components/ProjectCard';
import {motion} from 'framer-motion'


const tabs = [
  {name: "All"},
  {name: "UI/UX"},
  {name: "Web"},
  {name: "Mobile"},
];

const variants = {
  hidden: {opacity: 0, y: 100},
  reveal: {opacity: 1, y: 0},
};

const Projects = () => {
  const [displayProject, setDisplayProject] = useState(projects)
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef(new Array());

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex)
    setOffset(
      sumArray(prevEl.map(item => item.offsetWidth))
    )
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth)
  }, [activeIndex])
  
const setProjects = (category) => {
  if (category === "All"){
    return setDisplayProject(projects)
  }
  const pro = projects.filter((item) => item.category.toLowerCase() === category.toLowerCase())
  setDisplayProject(pro)
}

  return (
    <section id='projects'>
    <motion.div 
      initial="hidden"
      whileInView="reveal"
      viewport={{once: true}}
      transition={{staggerChildren: 0.02}}
      className='middle-container justify-center flex flex-col'>
      <motion.h2 
         transition={{duration: 0.5, ease: "easeIn"}} 
         variants={variants}
        className="h2-text mt-20 ">Projects</motion.h2>
      <div className='tabs flex items-center justify-center gap-4 mt-6'>
      </div>
      <motion.nav 
        transition={{duration: 0.5, delay: .5, ease: "easeIn"}} 
        variants={variants}
        className="relative w-full max-w-max py-2.5 rounded-lg flex items-center justify-center mx-auto mb-10 select-none">
        {tabs.map((tab, index) => (
          <button className="font-nunito relative inline-block font-medium px-6 z-10 bg-transparent text-white"
            ref={el => itemsEls.current[index] = el}
            onClick={() => {
              setActiveIndex(index)
              setProjects(tab.name)

            }}
            key={index}
            >
              {tab.name}
          </button>
        ))}
        <span className="absolute h-full rounded-lg transition-all cursor-pointer bg-gradient-to-r from-secondary to-primary"
           style={{
            left: `${offset}px`,
            width: `${indicatorWidth}px`
          }}/>
        
      </motion.nav>
      <motion.div 
        transition={{duration: 0.5, delay: 1, ease: "easeIn"}} 
        variants={variants}
        className='middle-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-center justify-center gap-20'>
        {
          displayProject.map((project, index) => (
            <ProjectCard
            title={project.title}
            image={project.image}
            data={project.data}
            stack={project.stack}

            key={index}
             />
          ))
        }
        
      </motion.div>

      </motion.div>
      </section>
  )
}

export default Projects