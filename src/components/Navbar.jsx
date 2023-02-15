import React, { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'

function navbar({isOpen, setIsOpen, setShowPortal}) {
   
  return (
    <header>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} setShowPortal={setShowPortal}/>
        <div className='bg-[#091628] w-full py-8 shadow-lg px-8'>
            <nav className='md:flex hidden align-middle justify-between'>
                <div></div>
                <ul className='flex gap-12'>
                    <div className='flex gap-12 text-[16px] mt-2'>
                        <li className='hover:text-[#4AFFA8] transition-all ease-out duration-150'><a href="#">Home</a></li>
                        <li className='hover:text-[#4AFFA8] transition-all ease-out duration-150'><a href="#aboutme">About Me</a></li>
                        <li className='hover:text-[#4AFFA8] transition-all ease-out duration-150'><a href="#projects">Projects</a></li>
                        <li className='hover:text-[#4AFFA8] transition-all ease-out duration-150'><a href="#contact">Contact</a></li>
                    </div>
                    <li><button onClick={() => setShowPortal(true)} className='outline outline-1 hover:outline-2 hover:text-[#4AFFA8] outline-[#4AFFA8] py-2 px-6 rounded-lg transform transitionduration-150 align-text-bottom'>Resume</button></li>
                </ul>
            </nav>
        </div>
        
    </header>
  )
}

export default navbar