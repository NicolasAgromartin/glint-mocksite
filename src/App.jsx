// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// views
import About from "./views/About/About";
import Clients from "./views/Clients/Clients";
import Contact from "./views/Contact/Contact";
import Home from './views/Home/Home';
import Services from "./views/Services/Services";
import Works from "./views/Works/Works";
// react icons
import { AiOutlineArrowUp } from 'react-icons/ai';
// react
import { useState } from "react";



export default function App() {

  const [ scrollDown, setScrollDown ] = useState(false);
  window.addEventListener('scroll', () => 
    window.scrollY > 50? setScrollDown(true) : setScrollDown(false)
  ) 

  return (
    <div className="w-full min-h-screen font-montserrat overflow-x-hidden text-white">
      <Header />
      <Home />
      <About />
      <Services />
      <Works />
      <Clients />
      <Contact />
      <Footer />
      
      <a href="#Home" className={`${scrollDown? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-52'} 
        transition-all duration-300
        w-16 h-16 bg-[#000] text-[#333] hover:text-white
        text-xl fixed bottom-4 right-4 z-50 flex justify-center items-center`}>
        <AiOutlineArrowUp />
      </a>

    </div>
  )
}

