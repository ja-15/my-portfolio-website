import { useState, useEffect, useRef } from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaBarsStaggered, FaDownload  } from "react-icons/fa6";
import {Link, animateScroll as scroll} from 'react-scroll'


import logo1 from '../assets/logo/logo1.svg'
import { menu } from '../data.js'
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  
 //scroll
 useEffect(() => {
  const handleScroll = () => {
    const currentScrollState = window.scrollY;
    if (currentScrollState > scrollPosition && currentScrollState > 100) {
      setIsVisible(false); // hide navbar
 
    } else {
      setIsVisible(true); // show navbar
    
    }
    setScrollPosition(currentScrollState);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [scrollPosition]);
  



  return (
    <>
    <nav className={`w-full bg-black/40 backdrop-blur-xl transition-transform duration-500 ease-in-out top-0 ${isVisible ? "translate-y-0" : "navbar-fixed"}`}>
    <div className="flex md:px-8 justify-between">
      <div className="py-4">
      <a href='/'>
      <img src={logo1} alt='Johndev' width={80}/>

      
      </a>
      </div>
      <div className='flex'>

      <div className='navbar-top'>
        <ul className="navbar-top flex flex-1">
          {menu.map((item) => (
            <li key={item.name}>
             <a
              href={item.href}
              className='p-navlinks'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      <div>
      <a href='https://drive.google.com/file/d/1Aymy0hL-nW5d74matEKa_-a5x8LXpZNI/view?pli=1' target="blank">
          <button 
            className='btn-secondary'>
            Resume 
            <FaDownload
            className='ml-2 mt-0.5 size-4'/>
          </button>
          </a>
          </div>
        </div>

        
        <div className='md:hidden pl-4 mt-3 flex items-center'>
        {showSidebar ? (
        <div className="md:hidden">   
      <IoMdClose className="mr-4 cursor-pointer size-8 fill-primary hover:scale-125 transition-all duration-300 ease-in-out" onClick={() => setShowSidebar(!showSidebar)} />
      </div>) : (
        <FaBarsStaggered 
          className='mr-4 cursor-pointer hover:scale-125 size-6 fill-primary transition duration-300 ease-in-out' 
          onClick={() => setShowSidebar(!showSidebar)} />
        )}
        </div>

      </div>
      
      </div>
      <div className={`${showSidebar ? 'show' : ''} sidebar-div`}>
     {menu.map((list, index) => (
       <Link
       activeClass='active'
       className=''
       to={list.name.toLowerCase()}
       spy={true}
       smooth={true}
       offset={-70}
       duration={500}
       key={index} 
       >
        {list.name}
       </Link>
       
     ))}
     <a href='https://drive.google.com/file/d/1Aymy0hL-nW5d74matEKa_-a5x8LXpZNI/view?pli=1' target="blank">
     <button 
      href='https://drive.google.com/file/d/1Aymy0hL-nW5d74matEKa_-a5x8LXpZNI/view?pli=1'
      className='btn-secondary'>
            Download CV  
            <HiMiniArrowTopRightOnSquare
            className='ml-2 size-6'/>
          </button>
          </a>
     </div>
     
    </nav>
    
     </>
  )
}

export default Navbar