
import React, { useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
 
  const navMenus =[
    {
      name:"Home",
      link :"/#HOME",
    },

    {
      name:"About",
      link :"/#about",
    },

    {
      name:"Services",
      link:".#services",
    },
    {
      name:"Contact",
      link:"#",
    },
  ];
export default function Navbar() {
      
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu=()=> {

    setShowMenu(!showMenu);
  }
     
  return (
    <>
      <nav className='bg-[#f3f3f3]'>
        <div className='container flex justify-between items-center py-3 sm:py-0'>
          <h1 className='text-3xl text-[#f98e2b] '>Potfolio</h1>
           {/* Desktop Menu */}
           <div className='hidden sm:block'>
             <ul className='flex items-center gap-4'>
              {
                navMenus.map((menu)=>(
                  <li key={menu.name}>
                    <a href={menu.link} className='no-underline text-black text-xl font-semibold  px-2 py-2 md:py-6 inline-block' > {menu.name} </a>
                  </li>
                ))
              }
             </ul>
           </div>
            {/* Mobile Menu */}
            <div className='block sm:hidden'>
            <TfiMenuAlt className='text-2xl cursor-pointer' onClick={toggleMenu} />
               {showMenu && ( 
               <div className='fixed top-14 bg-white shadow-md rounded-b-xl z-10 py-10  left-0 right-0 '>
                <ul className='flex flex-col items-center gap-4'>
                  {
                    navMenus.map((menu)=>(
                      <li>
                        <a href={menu.link} className='no-underline text-xl font-semibold px-2 py-4 md:py-6 inline-block cursor-pointer' > {menu.name} </a>
                      </li>
                    ))
                  }
                </ul>
               </div>
               )}
            </div>
        </div>
      </nav>
    </>
  )
}
