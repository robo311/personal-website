import React, { useEffect, useRef, useState } from 'react'

function MobileMenu({ isOpen, setIsOpen, setShowPortal }) {
    
    const menuRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setTimeout(()=> {
                    setIsOpen(false)
                }, 200)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };    

    },[menuRef])

    const handleLinkClick = () => {
        setTimeout(()=> {
            setIsOpen(false)
        }, 100)
    }
  return (
    <div className='md:hidden block'>
        <div onClick={toggleMenu} className='flex gap-[6px] flex-col w-[35px] absolute z-30 right-4 top-5 cursor-pointer'>
            <span className={`h-[3px] bg-[#4AFFA8] rounded-sm transition-all ease-in-out duration-150 w-8 ${isOpen && " translate-y-[9px] rotate-[-45deg]"} `}></span>
            <span className={`h-[3px] bg-[#4AFFA8] rounded-sm transition-all ease-in-out duration-150 w-8 ${isOpen && "bg-transparent"}`}></span>
            <span className={`h-[3px] bg-[#4AFFA8] rounded-sm transition-all ease-in-out duration-150 w-8 ${isOpen && " translate-y-[-9px] rotate-45"}`}></span>
        </div>
        {isOpen && (
            <header ref={menuRef} className='md:hidden fixed right-0 z-20'>
            <div className={`bg-[#0f1f36] h-[100vh] px-[60px] pt-[120px] transition-all ${isOpen ? "mobile-menu-open" : "mobile-menu-close"}`} >
                <nav className='text-center'>
                    <ul className='flex flex-col gap-[50px]'>
                        <li className='hover:text-[#4AFFA8] transition-all ease-out duration-150'><a onClick={handleLinkClick} href="#">Home</a></li>
                        <li className='hover:text-[#4AFFA8] transition-all ease-out duration-150'><a onClick={handleLinkClick} href="#aboutme">About Me</a></li>
                        <li className='hover:text-[#4AFFA8] transition-all ease-out duration-150'><a onClick={handleLinkClick} href="#projects">Projects</a></li>
                        <li className='hover:text-[#4AFFA8] transition-all ease-out duration-150'><a onClick={handleLinkClick} href="#contact">Contact</a></li>
                        <li><button onClick={setShowPortal} className='outline outline-1 hover:outline-2 hover:text-[#4AFFA8] outline-[#4AFFA8] py-2 px-6 rounded-lg transform transitionduration-150 align-text-bottom'>Resume</button></li>
                    </ul>
                </nav>
            </div>
        </header>
        )}
    </div>
  )
}

export default MobileMenu