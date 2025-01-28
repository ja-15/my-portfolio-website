import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import React from "react";

const ProjectCard = (props) => {
  
  return (
    <div className=' bg-slate-700 items-center justify-items-center w-[320px] rounded-lg overflow-hidden'>
      <div className=''>
        <img src={props.image} alt={props.title} />
      </div>
      <div className='px-4'>
        <div className='font-poppins text-xl font-semibold mt-4 mb-2'>
          <h2>{props.title}</h2>
        </div>
        <div className='font-poppins font-extralight text-sm text-white'>
          {props.data.description}
          
        </div>
          <div className='flex flex-row justify-between pb-4 items-center'>
            <div className="flex flex-row space-x-2 mt-4">
          {props.stack.map((item, index) => (
            <div key={index} className='flex items-center'>
              <div>
              {React.createElement(item.icon, {  
                style: { color: item.iconColor },  // Pass color to style
                size: '1.5em', })}
              </div>
              
            </div>
            
          ))}
          </div>
          <div className="">
            <a href={props.data.demoLink} target="_blank" >
            <HiMiniArrowTopRightOnSquare className="size-6 text-white cursor-pointer hover:text-primary hover:scale-125 place-self-center duration-300 ease-in-out" />
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard