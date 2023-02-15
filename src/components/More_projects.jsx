import React from 'react'
import { AiFillGithub, AiOutlineBehanceSquare } from 'react-icons/ai'


function More_projects() {
  return (
    <section>
        <h1 className='text-[32px] font-semibold text-center mt-[50px] mb-[20px]'>More Projects</h1>
        <main className='flex justify-center gap-[70px]'>
            <a href="https://github.com/robo311">
                <div className=' text-center bg-[#101926] transition-all ease-in-out duration-200 hover:bg-[#111D2F] rounded-md px-4 py-6 transform hover:translate-y-[-3px]'>
                    <span className='flex justify-center mb-2'>
                        <AiFillGithub size={70}/>
                    </span>
                    <small className='text-[#BDC3CB] text-[16px]'>Coding projects</small>
                    <h2 className='text-[24px] font-medium'>Github</h2>
                </div>
            </a>
            <a href="https://www.behance.net/roberthornik">
                <div className='text-center bg-[#101926] transition-all ease-in-out duration-200 hover:bg-[#111D2F] rounded-md px-4 py-6 transform hover:translate-y-[-3px]'>
                    <span className='flex justify-center mb-2'>
                        <AiOutlineBehanceSquare size={70}/>
                    </span>
                    <small className='text-[#BDC3CB] text-[16px]'>Grahic desings</small>
                    <h2 className='text-[24px] font-medium'>Behance</h2>
                </div>
            </a>
        </main>
    </section>
  )
}

export default More_projects