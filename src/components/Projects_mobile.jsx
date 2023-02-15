import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import data from "../assets/data/projects.json"

function Projects_mobile() {
  return (
    <section>
        <h1 className='section-heading'>02. <span className='font-semibold'>Projects</span></h1>
        {data?.projects?.map((item) => (
            <main key={item.id} className='flex justify-center my-4'>
            <div className='background-img-projects rounded-lg min-h-[350px]' style={{backgroundImage: `url(${item.mobile_image})`}}>
                <div className='px-8 py-6'>
                    <div>
                        <h2 className='text-[#4AFFA8] text-[18px] font-semibold mb-2'>{item.feature}</h2>
                        <span className='py-1 px-3 rounded-full' style={{backgroundColor: item.source_color}}><a className=' text-[12px]' href={item.github}>{item.source}</a></span>
                        <h1 className='font-bold text-[30px] mt-2 mb-2 hover:text-[#b0ccf5] transition-all ease-in-out duration-200'><a href={item.external_link}>{item.title}</a></h1>
                    </div>
                    <div>
                        <p className='max-w-[560px] sm:text-[16px] text-[14px]'>
                            {item?.pre_text}<span className='font-semibold text-[#4AFFA8]'>{item.title}</span> {item.main_text}
                        </p>
                    </div>
                    <div className='mt-6'>
                        <ul className='flex gap-x-8 gap-y-2 flex-wrap'>
                            {item.tags.map((tag)=> (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex gap-6 text-[24px] mt-4'>
                        <a className='hover:text-[#4AFFA8] transition duration-200 ease-out' href={item.github}><AiFillGithub/></a>
                        <a className='hover:text-[#4AFFA8] transition duration-200 ease-out' href={item.external_link}><FiExternalLink/></a>
                    </div>
                </div>
            </div>
        </main>
        ))}
    </section>
  )
}

export default Projects_mobile