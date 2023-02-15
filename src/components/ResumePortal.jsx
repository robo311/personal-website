import React from 'react'
import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { AiOutlineFilePdf } from "react-icons/ai"

function ResumePortal({ showPortal, closePortal }) {
    if(!showPortal) return null

  return ReactDOM.createPortal(
    <>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#0A1422] opacity-80 z-40 portal-opacity-animation'></div>
        <div className='fixed top-[50%] left-[50%] rounded-lg bg-[#132641] px-[60px] py-[100px] translate-x-[-50%] translate-y-[-50%] z-50 transition-all ease-in-out duration-150 portal-animation'>
            <div className='flex gap-10'>
                <a href="#">
                    <div className=' flex flex-col items-center text-center gap-3 bg-[#0f223d] rounded-xl hover:bg-[#183257] transition-all duration-150 ease-in-out cursor-pointer px-4 py-5'>
                        <AiOutlineFilePdf color='white' size={50}/>
                        <h3 className='font-medium'>English Version</h3>
                    </div>
                </a>
                <a href="src/assets/CV/Zivotopis_2023.pdf" target="_blank">
                    <div className=' flex flex-col items-center text-center gap-3 bg-[#0f223d] rounded-xl hover:bg-[#183257] transition-all duration-150 ease-in-out cursor-pointer px-4 py-5'>
                        <AiOutlineFilePdf color='white' size={50}/>
                        <h3 className='font-medium'>Slovak Version</h3>
                    </div>
                </a>
            </div>
            <button className='absolute top-3 right-3' onClick={closePortal}><AiOutlineCloseCircle size={25}/></button>
        </div>
    </>, document.getElementById("portal")
  )
}

export default ResumePortal