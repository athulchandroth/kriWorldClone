import React, { useState } from 'react'
import './Navbar.scss'
import {NavLink} from 'react-router-dom'
import {images} from '../../constants'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'

const Navbar = () => {
  const navContent = ['Home','SEO','Mobile Apps','Web Hosting ▼','Graphic Design','Career','Contact Us'];
  const [toggle, setToggle] = useState(false);
  const [element, setElement] = useState(null);
  
  
  function template({ rotate, x }) {
    return `rotate(${rotate}) translateX(${x})`
  }
  
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <NavLink to='/' ><img src={images.kriworldlogo} alt='logo'/></NavLink>
      </div>
      
        <ul className='app__navbar-links' >
          {navContent.map((item)=>(
          
          <li className='app__flex  ' key={`link-${item}`}>
            <div/>
            <NavLink to={`/${item}`} className='nav-link'
              onMouseEnter={()=>setElement(item)} 
              onMouseLeave={()=>setElement(null)}>{item}
              </NavLink>
            </li>
            
            ))}
            
            
        </ul>
        <ul className="sub-menu">
        {element==='Web Hosting ▼' &&(
                <div className="drop-down" onMouseEnter={()=>setElement("Web Hosting ▼")} onMouseLeave={()=>setElement(null)}>
                    {['Marketing','Web Hosting', 'Video Creation', 'Business Solution'].map((item)=>(
                        <li className='app-flex ' key={`link-${item}`}>
                        <NavLink to={`/${item}`} className='nav-link'>{item}</NavLink>
            </li>
            
            ))}


                </div>
            )}
            </ul>
      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={()=>setToggle(true)}/>
          {toggle && (
              <motion.div 
            //   whileInView={{x:[300,0]}}
            //   transition={{duration:0.85,ease:'easeOut'}}
            transformTemplate={template}
    animate={{ rotate: 360 }}
    style={{ rotate: 0, x: "calc(0px)" }}
              >
                
                <HiX onClick={()=>setToggle(false)}/>
                
                <ul >
                {navContent.map((item)=>(
                <li  key={item}>
                 
                 <NavLink to={`/${item}`} className="nav-link"
                 onMouseEnter={()=>setElement(item)} 
                 onMouseLeave={()=>setElement(null)} 
                 onClick={()=>setToggle(false)}>{item}</NavLink>
                  </li>))}
                  </ul>
                  




                </motion.div>
            )
          }

      
      </div>
    </nav>
  )
}

export default Navbar