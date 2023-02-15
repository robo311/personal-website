import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import data from "../assets/data/projects.json"

function Projects() {
  return (
    <section id='projects'>
      <h1 className='section-heading'>02. <span className='font-semibold'>Projects</span></h1>
      <main className=''>
        {data?.projects?.map((item) => 
          <div className='relative grid gap-3 grid-cols-12 items-center my-[100px]'>
            <div className='project-desc' style={{ gridColumn: item.column_desc, textAlign: item.text_dir}}>
             <div>
              <h2 className='text-[#4AFFA8] text-[20px] font-semibold mb-2'>{item.feature}</h2>
              <span className='py-1 px-3 rounded-full text-sm' style={{backgroundColor: item.source_color}}> <a href={item.github}>{item.source}</a></span>
              <h1 className='font-bold text-[30px] mt-2 mb-2 hover:text-[#b0ccf5] transition-all ease-in-out duration-200'><a href={item.external_link}>{item.title}</a></h1>
              <div className='bg-[#132641] p-6 rounded-lg'>
                <p className='max-w-[560px] sm:text-[16px] text-left'>{item.pre_text}<span className='font-semibold text-[#4AFFA8]'>{item.title}</span>{item.main_text}</p>
              </div>
              <div className='flex flex-col' style={{alignItems: item.align}}>
                <div className='mt-4'>
                  <ul className='flex gap-x-8 gap-y-2 max-w-[500px] flex-wrap' style={{justifyContent: item.justify}}>
                    {item.tags.map((tag)=> (
                      <li>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className='flex gap-6 text-[24px] mt-4'>
                  <a className='hover:text-[#4AFFA8] transition duration-200 ease-out' href={item.github}><AiFillGithub/></a>
                  <a className='hover:text-[#4AFFA8] transition duration-200 ease-out' href={item.external_link}><FiExternalLink/></a>
                </div>
              </div>
             </div>
            </div>
            <div className='project-image lg:mt-[60px]' style={{ gridColumn: item.column_img}}>
              <img className='w-full' src={`/src/assets/project_${item.id}.png`} alt="" />
            </div>
          </div>
        )}
        
      </main>
    </section>
  )
}

export default Projects