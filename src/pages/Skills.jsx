import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaPython} from "react-icons/fa";
import Tooltip from "../components/animation/Tooltip";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiMysql, SiPostgresql } from "react-icons/si";
import {motion} from 'framer-motion';

const variants = {
  hidden: {opacity: 0, y: 100},
  reveal: {opacity: 1, y: 0},
}

const Skills = () => {
  return (
    <section id="skills">
      <motion.div
       initial="hidden"
       whileInView="reveal"
       viewport={{once: true}}
       transition={{staggerChildren: 0.02}}
      className="w-full items-center justify-center justify-items-center pb-10 pt-24">
      <div className="rounded-xl pb-14 md:mt-10">
      <motion.h2 
        transition={{duration: .5, delay: .5,  ease: "easeIn"}} 
        variants={variants}
        className="h2-text pt-10">Skills
      </motion.h2>

      <div className="flex flex-col justify-center gap-40 items-center justify-items-center">


        <div className="cursor-pointer rounded-xl flex flex-col items-center text-center flex-none pt-8 ">
          <motion.h3 
            transition={{duration: .5, delay: 1, ease: "easeInOut"}}
            variants={variants}
            className="font-poppins text-xl text-center">Technologies I use</motion.h3>
  
  <         div className="cursor-pointer pl-4 pr-6 pb-6 rounded-xl flex flex-col items-center flex-none">
            <motion.div 
              transition={{duration: 0.5, delay: 1.5, ease: "easeInOut"}}
              variants={variants}
              className="grid grid-cols-3 md:grid-flow-col justify-items-center mt-6 gap-6">

              <Tooltip tooltip="MongoDB">
                <SiMongodb className="size-10 fill-green-800 " />
              </Tooltip>

              <Tooltip tooltip="Express.js">
                <SiExpress className="size-10 fill-slate-300" />
              </Tooltip>

              <Tooltip tooltip="Node.js">
                <FaNodeJs className="size-10 fill-lime-500 " />
              </Tooltip>

              <Tooltip tooltip="Python">
                <FaPython className="size-10 fill-secondary " />
              </Tooltip>

              <Tooltip tooltip="MySQL">
                <SiMysql className="size-10 fill-secondary " />
              </Tooltip>

              <Tooltip tooltip="PostgreSql">
                <SiPostgresql className="size-10 fill-secondary" />
              </Tooltip>
            </motion.div>
        </div>

          <motion.div 
            transition={{duration: 0.5, delay: 2, ease: "easeInOut"}}
            variants={variants}
            className="grid grid-cols-3 md:grid-flow-col justify-items-center gap-6 ">
            <Tooltip tooltip="React.js">
              <FaReact className="size-10 fill-primary" />
            </Tooltip>

            <Tooltip tooltip="HTML">
              <FaHtml5 className="size-10 fill-orange-400 " />
            </Tooltip>

             <Tooltip tooltip='Tailwind CSS'>            
              <RiTailwindCssFill className="size-10 fill-primary "/>
            </Tooltip>

            <Tooltip tooltip="CSS">   
              <FaCss3 className="size-10 fill-blue-500 " />
            </Tooltip>

            <Tooltip tooltip="Javascript">
              <IoLogoJavascript className="size-10 fill-yellow-500 " />
            </Tooltip>
             
            </motion.div>

        </div>
        
      </div>
      </div>
      </motion.div>
      
      </section>
  )
}

export default Skills