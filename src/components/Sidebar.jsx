import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiFillFacebook, AiOutlineBehanceSquare } from "react-icons/ai"

function Sidebar() {
  return (
    <div className=''>
      <div className='fixed z-[-10] hidden sm:block sm:left-5 md:left-8 lg:left-14 xl:left-16 2xl:left-23 bottom-0'>
        <ul className='text-[28px] flex flex-col gap-6'>
            <li className='hover:text-[#4AFFA8] transition duration-200 ease-out transform hover:translate-y-[-3px] p-[1px]'><a href="https://github.com/robo311"><AiFillGithub/></a></li>
            <li className='hover:text-[#4AFFA8] transition duration-200 ease-out transform hover:translate-y-[-3px] p-[1px]'><a href="https://www.linkedin.com/in/robert-hornik-b90795218/"><AiFillLinkedin/></a></li>
            <li className='hover:text-[#4AFFA8] transition duration-200 ease-out transform hover:translate-y-[-3px] p-[1px]'><a href="https://www.instagram.com/robo_311/"><AiOutlineInstagram/></a></li>
            <li className='hover:text-[#4AFFA8] transition-all duration-200 ease-in-out transform hover:translate-y-[-3px] p-[1px]'><a href="https://www.facebook.com/robo.hornik.7/"><AiFillFacebook/></a></li>
            <li className='hover:text-[#4AFFA8] transition duration-200 ease-out transform hover:translate-y-[-3px] p-[1px]' ><a href="https://www.behance.net/roberthornik"><AiOutlineBehanceSquare/></a></li>
            <li className='flex'><span className='ml-3 h-24 border-l-[1px] border-white'></span></li>
            
        </ul>
      </div>
    </div>
  )
}

export default Sidebar