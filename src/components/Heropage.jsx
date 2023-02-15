import React from 'react'
import Lottie from "lottie-react"
import scroll from "../assets/scroll.json"
import laptop from "../assets/laptop.json"

function Heropage() {
  return (
    <section className='sm:mt-[150px] mt-[100px]'>
        <main className='flex'>
            <div>
                <h1 className=' font-semibold sm:text-[52px] text-[46px]'>Robert Hornik</h1>
                <div className='flex ml-[-10px]'>
                    <span className='ml-3 h-26 border-l-[2px] border-[#4AFFA8] pr-4 mt-2'></span>
                    <div className='2xl:w-[750px] xl:w-[580px] md:w-[650px]'>
                        <h3 className='font-medium sm:text-[34px] text-[28px]'>Frontend Web Developer & Graphic  Designer</h3>
                        <p className=' sm:text-[22px] text-[18px]'><span className='text-[#4AFFA8]'>Beauty Meets Functionality</span>: A Unique Blend of Design and Frontend Development Skills</p>
                    </div>
                </div>
                <button className='outline outline-1 hover:outline-2 outline-[#4AFFA8] py-2 px-6 rounded mt-10 duration-100 transition-all ease-in-out'>
                    <a href="#contact" className='font-medium text-[#4AFFA8] text-[20px]'>Let's talk</a>
                </button>
            </div>
            <div className='2xl:mt-[-80px] xl:mt-[-50px] xl:block hidden'>
                <Lottie animationData={laptop}/>
            </div>
        </main>

        <div className=''>
            <Lottie animationData={scroll} style={{ height: '350px'}}/>
        </div>
        
    </section>
  )
}

export default Heropage