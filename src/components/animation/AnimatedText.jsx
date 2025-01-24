import {motion} from 'framer-motion'
import { splitString } from '../../utilities/helper.js';



const AnimatedText = ({text, classes}) => {
  const textChar = splitString(text)

  const charVariants = {
    hidden: {opacity: 0},
    reveal: {opacity: 1},
  }
  

  return (
     <motion.p 
        initial="hidden"
        whileInView="reveal"
        viewport={{once: true}}
        className={classes}
        transition={{staggerChildren: 0.01}}
        >
        {textChar.map((char, index) => (
        <motion.span 
          key={index} 
          transition={{duration: 0.2}} 
          variants={charVariants}>
        {char}
      </motion.span>
      ))}
      
    </motion.p>
  )
}

export default AnimatedText