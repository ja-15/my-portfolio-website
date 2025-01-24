import { useRef, useState } from "react"

const IconHover= ({children,color,anchor,  text,...props}) => {
  const [isHover, setIsHover] = useState(false)
  const ref = useRef(null)
  return (
    <div 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${color || "bg-gray-600"} cursor-pointer flex items-center px-3 rounded-lg ease-in-out duration-300 flex-nowrap`} {...props}>
        <a 
        href={anchor} 
        target="_blank"
        className="textdecoration-none color-inherit flex items-center" 
        // style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}
      >
        {children}
        
        <div 
          style={{width: isHover ? ref.current?.offsetWidth || 0 : 0}}
          className='overflow-x-hidden duration-300 transition-all ease-out font-nunito text-sm font-semibold text-nowrap'>
          <span ref={ref} className='px-1.5'>{text}</span>
        </div>
        </a>
      </div>
  )
}

export default IconHover