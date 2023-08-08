// content
import { homeContent } from "./content";
// icons
import { socialMediaIcons } from '../../../public/icons/socialMedia.icons';
import { ActionButton } from "../../styled-components/styled-buttons";
import { RiArrowDownSLine } from 'react-icons/ri';
// logo
import logo from './logo.png'


export default function Home() {
  return (
    <div id="Home" className="w-full min-h-screen bg-hero bg-center bg-cover bg-fixed flex justify-start items-start">

      <div className="w-full min-h-screen backdrop-brightness-[.30] flex flex-col justify-center items-center text-center 
      sm:text-left pt-32 pb-20">

        <div className=" absolute top-0 left-0 w-full h-24 flex justify-between items-center pl-10 ">
          <a href="#Home" target="__blank">
            <img src={logo} alt="" className='w-20 ' />
          </a> 
        </div>

        <div className="w-[clamp(90%,450px,600px)] min-h-[500px] flex flex-col justify-evenly items-center sm:items-start gap-8 md:px-[10%] md:py-[5%] ">
          <h3 className="text-white/80 text-[min(5vw,16px)] tracking-[3px] font-bold">{homeContent.h3}</h3>
          
          <p className="w-[95vw] h-[50%] sm:w-[60vw] flex text-[clamp(30px,6vw,60px)] font-bold  sm:text-left sm:w-30vw ">{homeContent.h1}</p>

          <div className="w-full flex justify-center items-center flex-wrap gap-6 sm:justify-start pb-20">
            <ActionButton href="#Contact"> Start a project </ActionButton>
            <ActionButton href="#About"> More about us </ActionButton>
          </div>


          <div className="w-full h-24 absolute bottom-0 right-0 flex justify-end items-start gap-2 pr-12 ">
            <a href="" className="flex gap-2 justify-start items-center tracking-[4px] uppercase font-bold text-[10px]">
              <RiArrowDownSLine className="text-primary text-2xl " /> Scroll Down
            </a>
            <span className="w-[2px] h-full bg-primary" />
          </div>

          <aside className="hidden absolute right-0 top-0 sm:flex flex-col justify-center items-center gap-8 w-20 h-full ">
            {socialMediaIcons.map((Social, index) => 
              <a href='#' target='__blank' key={index} className='hover:text-white hover:scale-110 
              transition-color duration-500  p-2 rounded-full border-[2px] border-white' > 
                <Social.icon/> 
              </a>)}            
          </aside>
        </div>
      </div>
    </div>
  )
}
