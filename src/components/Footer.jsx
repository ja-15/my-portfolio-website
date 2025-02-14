import IconHover from './IconHover'
import logo1 from '../assets/logo/logo1.svg'
import { FiGithub} from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='h-full bg-background-2'>
      <div className='flex justify-between border-b-2 border-slate-800/40 pb-4 mx-12'>
        <div className='pt-6 flex flex-col self-start max-md:hidden'>
          <img src={logo1} alt='J CODE logo' width={80}/>
        </div>
       <div className='flex flex-col text-center self-end text-white'>
        <div className='flex h-10 gap-4'>
         
          <IconHover 
            anchor="https://github.com/ja-15"
            text="github">
          <FiGithub className='size-5' />
          </IconHover>
          
          <IconHover 
            anchor="https://www.linkedin.com/in/johnarenga15/"
            text="linked-in" color='bg-blue-500'>
          <FaLinkedinIn className='size-5' />
          </IconHover>

          <IconHover 
            anchor="https://wa.me/+61450983140"
            text="whatsapp" color='bg-green-500'>
          <FaWhatsapp className='size-5' />
          </IconHover>

          <IconHover 
            anchor="https://discord.com/kyre-02"
            text="Github" color='bg-indigo-600'>
          <FaDiscord className='size-5' />
          </IconHover>

          <IconHover 
            anchor="https://x.com/john_151992"
            text="Github">
          <FaXTwitter className='size-5' />
          </IconHover>
        </div>
        
        </div>
        
      </div>
      <div className='p-4 flex flex-row md:items-center justify-between font-nunito text-sm md:px-12'>
      <p className='text-center'>© 2025 JOHN.DEV™. All Rights Reserved.
        </p>
      <p className='text-center'>Built and Design by John Arenga</p>
      
      </div>
      
    </div>
  )
}

export default Footer