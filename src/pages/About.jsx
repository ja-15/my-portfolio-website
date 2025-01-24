import profile1 from '../assets/images/profile/profile1.png'
import {motion} from 'framer-motion'

const variants = {
  hidden: {opacity: 0, y: 100},
  reveal: {opacity: 1, y: 0},
}

const About = () => {
  const contact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="about" className="relative bg-background-2 overflow-hidden">
      <div className="relative middle-container w-full md:gap-8 max-md:px-4 flex md:py-20 pt-10 pb-16">
        <div className='max-md:hidden w-full flex relative md:px-8 rounded-xl bg-transparent'>
          <div className="bg-transparent relative z-10">
          <div className='max-md:hidden absolute -top-4 -left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob '/>
          <div className='max-md:hidden absolute top-0 left-48 w-72 h-72 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000'/>
          <div className='max-md:hidden absolute left-0 bottom-2 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000'/>
          </div>
          <div className="max-md:hidden overflow-hidden size-[400px] rounded-3xl bg-transparent relative z-10">
            <motion.img
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.25}}
              src={profile1} alt='profile photo' className=''  
            />
        </div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="reveal"
          viewport={{once: true}}
          transition={{staggerChildren: 0.02}}
          className="flex flex-col md:pt-10 md:px-8 text-center md:text-start">

          <motion.h2 
            transition={{duration: 0.5, ease: "easeIn"}} 
            variants={variants}
            className="h2-text md:place-self-start mb-2">About Me
            </motion.h2>


           <motion.p 
            transition={{duration: 0.5, delay: 0.5, ease: "easeIn"}} 
            variants={variants}
            className="font-poppins text-xl font-semibold mb-2">I am  
            <span className="text-xl font-poppins text-primary "> John Arenga</span>
           </motion.p>

          <motion.p 
            transition={{duration: 0.5, delay: 1, ease: "easeIn"}} 
            variants={variants}
            className="text-base font-poppins py-2 font-light">My adventure in software development started from a simple curiosity about how websites function, 
            evolving into a full-fledged career in creating seamless digital experiences. 
            In my spare time, I enjoy delving into new programming languages and contributing to tech communities." </motion.p>
            <motion.button
             transition={{duration: 0.5, delay: 1.5, ease: "easeIn"}} 
             variants={variants}
            onClick={contact} className='btn-primary place-self-center md:place-self-start w-fit mt-10'>Send me an email</motion.button>
        </motion.div>
        
      
      </div>
      </section>
  )
}

export default About