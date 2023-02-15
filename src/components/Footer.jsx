import React from 'react'

function Footer() {
  return (
    <footer className="z-10 w-full py-4 gap-2 flex flex-col items-center mt-[70px]">
        <div className='border-[#4AFFA8] border-t-[1px] w-[600px]'></div>
        <span className='text-[#AFAFAF] text-xs'>Designed & Built by <a className='hover:text-[#4AFFA8] hover:underline underline-offset-2 transition-all duration-200 ease-in-out' href="https://github.com/robo311">Robert Hornik</a></span>
    </footer>
  )
}

export default Footer