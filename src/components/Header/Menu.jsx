// react-icons
import { RxCross2 } from 'react-icons/rx';
import { socialMediaIcons } from '../../../public/icons/socialMedia.icons';











// eslint-disable-next-line react/prop-types
export default function Menu({menuOpen, toggleMenu}) {


  return (
    <aside className={`absolute top-0 right-0 w-72 h-screen transition-transform duration-[.7s] text-white z-50
      flex flex-col justify-start items-center bg-black p-8 gap-10
      ${menuOpen? 'translate-x-0' : 'translate-x-72'}`}>
      
      <div className="w-full flex justify-between items-start pt-2 h-20 ">
        <h3 className="text-primary text-xs font-bold tracking-widest">NAVIGATION</h3>
        <button onClick={toggleMenu} > <RxCross2 /> </button>
      </div>

      <div className=' w-full flex gap-4 justify-start items-start flex-col font-bold text-[18px]'>
        <a href="#Home" onClick={toggleMenu}>Home</a>
        <a href="#About" onClick={toggleMenu}>About</a>
        <a href="#Services" onClick={toggleMenu}>Services</a>
        <a href="#Works" onClick={toggleMenu}>Works</a>
        <a href="#Clients" onClick={toggleMenu}>Clients</a>
        <a href="#Contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className='text-[12.5px] text-white/40 leading-6 '>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptate, minus quos saepe nostrum quo tempore et amet molestias doloremque excepturi <a href="#" className='text-white/80 hover:text-white transition-colors duration-400'>sapiente</a> quasi consequatur odit? Alias quos optio earum fugit!</p>
      </div>

      <div className='w-full flex justify-start items-center gap-4 text-white/40 text-xl'>
        {socialMediaIcons.map((Social, index) => <a href='#' target='__blank' key={index} className='hover:text-white transition-color duration-500' > <Social.icon/> </a> )}
      </div>

    </aside>
  )
}
