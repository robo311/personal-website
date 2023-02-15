import React from 'react'


function About() {
  return (
    <section className='mb-8' id='aboutme'>
        <h1 className='section-heading'>01. <span className='font-semibold'>About me</span></h1>
        <main className='flex xl:flex-row flex-col 2xl:gap-[100px]'>
            <div>
                <p className='max-w-[680px] text-[18px]'>
                    Hi! My name is Robert and I'm <span className='text-[#4AFFA8] font-semibold'>frontend developer</span> and <span className='text-[#4AFFA8] font-semibold'>graphic designer</span> based in Slovakia. With <span className='text-[#4AFFA8] font-semibold'>over 3 years of experience</span> in creating visually stunning websites and graphic designs, I have strong understanding of both the technical and creative aspects of web design. 
                    Currently I'm studying Multimedia at University of Žilina.
                </p>
                <p className='mt-8 text-[18px]'>Here are few technologies & softwares I've been using for my projects: </p>
                <div className='grid grid-cols-2 mt-6 gap-[80px] ml-5 mr-4'>
                    <ul className='about-ul'>
                        <li className='about-ul-li'>HTML/CSS</li>
                        <li className='about-ul-li'>Javascript</li>
                        <li className='about-ul-li'>React</li>
                        <li className='about-ul-li'>Firebase</li>
                        <li className='about-ul-li'>Tailwind</li>
                    
                    </ul>
                    <ul className='about-ul'>
                        <li className='about-ul-li'>Material UI</li>
                        <li className='about-ul-li'>Bootstrap</li>
                        <li className='about-ul-li'>Figma</li>
                        <li className='about-ul-li'>Adobe Photoshop</li>
                        <li className='about-ul-li'>Adobe Illustrator</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center mt-4'>   
                <img className='xl:min-w-[350px] w-[300px]' src="/aboutme-picture.png" alt="ProfilePicture" />
            </div>

        </main>
    </section>
  )
}

export default About