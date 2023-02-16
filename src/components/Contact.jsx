import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();
    const [error, setError] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iaa7mal', 'template_2xjw6qm', form.current, 'dbsSOexIhGeptLnYC')
        .then((result) => {
            console.log(result.text);
            setError(false)
            document.getElementById("from_name").value = ""
            document.getElementById("from_email").value = ""
            document.getElementById("message").value = ""
            
        }, (error) => {
            console.log(error.text);
            setError(true)
            
        });
    };

  return (
    <section id='contact' className='mb-8'>
        <div className='w-full flex flex-col items-center mb-[50px]'>
            <h1 className='section-heading'>03. <span className='font-semibold'>Contact</span></h1>
            <p className='text-center text-[20px] max-w-[700px]'>Do you have question or need help with anything? Don't hesitate and contact me! I'll try to get back to you as soon as possible.</p>
        </div>
        <div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-8 items-center'>
                <div className='flex flex-col md:flex-row md:gap-[90px] gap-[20px]'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-[18px]'>Name</label>
                        <input required name="from_name" id='from_name' type="text" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-[18px]'>Email</label>
                        <input required name="from_email" id='from_email' type="email" />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-[18px]'>Your question</label>
                    <textarea required id='message' name="message" className='md:w-[535px] w-[220px] h-[150px]'></textarea>
                </div>
                <input type="submit" value="Send" className='outline outline-1 hover:outline-2 outline-[#4AFFA8] py-2 px-6 rounded-lg mt-4 transform hover:translate-y-[-2px] transition-transform duration-150 cursor-pointer'/>
            </form>
            
        </div>
    </section>
  )
}

export default Contact