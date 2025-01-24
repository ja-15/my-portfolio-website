import React from 'react'
import { MdDesignServices, MdOutlineAppSettingsAlt } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import AnimatedBorder from '../components/animation/AnimatedBorder';
import {motion} from 'framer-motion'

const variants = {
    hidden: {opacity: 0, y: 100},
    reveal: {opacity: 1, y: 0},
}

const Services = () => {
  return (
    <section id='services'>
      <div className='text-center items-center middle-container'>
        <motion.div
          initial="hidden"
          whileInView="reveal"
          viewport={{once: true}}
          transition={{staggerChildren: 0.02}}
          className='section_header_wrapper'>
          <motion.h2 
            transition={{duration: 0.5, ease: "easeIn"}} 
            variants={variants}
            className='h2-text pt-10 md:pt-24'>Services </motion.h2>
          <motion.p 
            transition={{duration: 0.5, delay: 0.5, ease: "easeIn"}} 
            variants={variants}
            className='font-poppins text-base font-light pt-2 pb-10'>Dive in to explore my projects, skills, and the journey I've embarked on in the world of web development
            </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="reveal"
          viewport={{once: true}}
          transition={{staggerChildren: 0.02}}
          className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto items-center justify-items-center pt-4'>
            
            {/* first */}
            <motion.div
               transition={{duration: 0.5,delay: 1, ease: "easeIn"}} 
               variants={variants}>
            <AnimatedBorder>
            <div className='services-div absolute '>
              <div className='place-self-start flex mt-8 pl-6 mb-4 justify-center items-center '>
                <div className='relative flex items-center justify-center w-14 h-14 rounded-full border border-primary flex-none'>
              <MdDesignServices style={{ fill: '#0EA5E9' }} className='text-4xl text-primary' />
              </div>
              <h3 className='font-poppins font-semibold text-3xl pl-4 text-start'>UI/UX Designing</h3>
              </div>
              <p className='font-poppins font-light text-sm pb-8 px-8 text-start'>Elegant and responsive interfaces that enhance user engagement and innovative UI/UX design that captivates and converts using figma. 
                I put your users first, ensuring that every design decision enhances their experience.</p>

                  
                </div>
              </AnimatedBorder>
            </motion.div>

            {/* middle */}
            <motion.div
               transition={{duration: 0.5, delay: 1.5, ease: "easeIn"}} 
               variants={variants}>
            <AnimatedBorder>
            <div className='services-div absolute'>
              <div className='justify-center items-center place-self-start flex pl-6 px-4 mt-8 mb-4'>
              <div className='relative flex items-center justify-center w-14 h-14 rounded-full border border-primary flex-none'>
              <FaLaptopCode style={{ fill: '#0EA5E9' }} className='text-4xl text-primary' />
              </div>
              <h3 className='font-poppins font-semibold text-3xl pl-4 text-start'>Full-stack Development</h3>
              </div>
              <p className='font-poppins font-light text-sm pb-8 px-8 text-start '>Build an end-to-end full stack development services to bring your ideas to life. 
                From designing intuitive user interfaces to building robust backend systems, 
                also ensure seamless integration and exceptional performance.
                </p>
                
            </div>
            </AnimatedBorder>
            </motion.div>

           

          
        </motion.div>
      </div>
      </section>
  )
}

export default Services



 {/* last */}
            {/* <motion.div
               transition={{duration: 0.5, delay: 2,  ease: "easeIn"}} 
               variants={variants}>
            <AnimatedBorder>
            <div className='services-div absolute'>
              <div className='justify-start items-start text-start pl-6 flex px-4 mt-10'>
              <div className='relative flex items-center justify-center w-16 h-16 rounded-full border border-primary flex-none'>
              <MdOutlineAppSettingsAlt style={{ fill: '#0EA5E9' }} className='text-4xl text-primary' />
              </div>
              <h3 className='font-montserrat font-semibold text-3xl pb-8 pl-2'>Mobile Application</h3>
              </div>
              <p className='font-nunito font-light text-md pb-8 px-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione voluptatum earum quam tempore, 
                repellat aut vero ut eum, provident accusamus recusandae eligendi, 
                adipisci sequi reiciendis quisquam? Sapiente optio rerum sequi!</p>

                <button className='btn-primary mb-10'>Read More</button>
            </div>
            </AnimatedBorder>
            </motion.div> */}
