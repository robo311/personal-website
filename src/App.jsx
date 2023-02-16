import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Heropage from './components/Heropage'
import More_projects from './components/More_projects'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Projects_mobile from './components/Projects_mobile'
import ResumePortal from './components/ResumePortal'
import Sidebar from './components/Sidebar'



function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(()=> {
    if(isOpen === true){
      document.body.style.overflow = 'hidden'
    }else if(isOpen === false){
      document.body.style.overflow = 'scroll'
    }
  },[isOpen])
  
  console.log(show)

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setShowPortal={setShow}/>
      <Sidebar/>
      <ResumePortal showPortal={show} closePortal={()=>setShow(false)}/>
      <div className={`App container mx-auto px-[20px] lg:px-[120px] md:px-[80px] sm:px-[60px] pt-10 ${isOpen && " duration-100 transition-all ease-in-out blur-sm"}`}>
        <Heropage/>
        <About/>
        <div id='projects'>
          {width < 1024 ? <Projects_mobile/> : <Projects/> }
        </div>
        <More_projects/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App
