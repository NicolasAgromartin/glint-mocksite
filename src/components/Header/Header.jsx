
// react-icons
import { HiBars3 } from 'react-icons/hi2';
// react
import { useState } from 'react';
// components
import Menu from './Menu';

export default function Header() {

  const [ menuOpen, setMenuOpen ] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  const [ scrollDown, setScrollDown ] = useState(false);
  window.addEventListener('scroll', () => 
    window.scrollY > 50? setScrollDown(true) : setScrollDown(false)
  ) 


  return (
    <header className='fixed top-0 right-0 w-1/2 h-24 flex justify-end items-center pr-6 z-30 '>
      <button className={`group flex gap-2 justify-center items-center text-xs ${scrollDown? 'bg-black' : 'bg-transparent'} transition-colors duration-500 px-2`} onClick={toggleMenu}>
        <span className='text-primary transition-colors duration-[.7s] tracking-widest font-bold group-hover:text-white '>MENU</span>
          <HiBars3 className='text-4xl text-white' />
      </button>

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />        
    </header>
  )
}
