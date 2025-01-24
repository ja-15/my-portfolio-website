import React from 'react'
import hero from '../assets/images/profile/hero.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import {motion} from 'framer-motion';

const variants = {
  hidden: {opacity: 0, y: -100},
  reveal: {opacity: 1, y: 0},
}

const Header = () => {


  const contact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='w-full h-auto relative flex mt-8 flex-wrap justify-center items-center pb-16 -z-10'>
      <div className='w-full flex max-container lg:px-4 flex-wrap md:mt-4 md:mb-10 md:pt-8'>
      
        <motion.div 
          initial="hidden"
          whileInView="reveal"
          viewport={{once: true}}
          transition={{staggerChildren: 0.02}}
          className='w-full md:w-3/5 text-center items-center md:text-left md:pl-4 md:mt-6'>

        <motion.p 
          transition={{duration: 0.5, ease: "easeIn"}} 
          variants={variants}
          className='font-poppins text-base md:text-lg font-light'>
            Hello There! I am
        </motion.p>

        <motion.h1 
          transition={{duration: 0.5,delay: 0.5, ease: "easeIn"}} 
          variants={variants}
          className='font-poppins font-bold text-3xl lg:text-[70px] lg:leading-[90px] mb-6 text-primary'>
          John Arenga,
        </motion.h1>

        <motion.h1 
          transition={{duration: 0.5,delay: 1, ease: "easeIn"}} 
          variants={variants}
          className='font-poppins font-extrabold text-3xl lg:text-[70px] lg:leading-[80px] pb-2'>   
          I transform ideas into engaging applications
        </motion.h1>

        <motion.p 
          transition={{duration: 0.5,delay: 1.5, ease: "easeIn"}} 
          variants={variants}
          className='font-poppins text-base md:text-lg font-light pt-4 mb-12' >    
          a passionate full-stack developer with a knack for creating efficient, scalable, and user-friendly web applications, 
          with expertise in React.js, Node.js, TailwindCSS, Mongodb, Express.js, PostgreSQL, MySQL, and UI/UX design.
        </motion.p>

   
          <motion.button 
            transition={{duration: 0.5,delay: 2, ease: "easeIn"}} 
            variants={variants}
            className='btn-primary place-self-center md:place-self-start font-poppins'>
            Let's connect
            <FaArrowRightLong className='place-self-center ml-2' />
          </motion.button>
  

      </motion.div>

        <div className='w-full mx-auto md:w-2/5 flex mt-6 md:mt-0 overflow-hidden -z-10'>
        <div className='max-w-full mx-auto overflow-hidden photo-container'>
        <motion.img 
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: .5}}
          src={hero} alt='hero' className='h-auto w-full max-w-full place-self-end' />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Header