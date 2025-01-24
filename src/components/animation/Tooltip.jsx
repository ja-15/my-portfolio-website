import React, {useRef} from 'react'

const Tooltip = ({children, tooltip}) => {
  const tooltipRef = useRef(null);
  const container = useRef(null);

  return (
    <div 
    ref={container}
    onMouseEnter={({clientX}) => {
      if (!tooltipRef.current || !container.current) return;
      const {left} = container.current.getBoundingClientRect();
      console.log(left)
      tooltipRef.current.style.left = clientX - left + 'px';
    }} 
    className='group relative inline-block bg-dark-gray p-4 rounded-full icon-hover'>
      {children}
      { tooltip  && <span ref={tooltipRef} className='invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-xs bg-secondary/50
       text-white py-0.5 px-2 absolute top-full rounded shadow-xl font-poppins font-extralight whitespace-nowrap'>{tooltip}</span> 
       }
      </div>
  )
}

export default Tooltip