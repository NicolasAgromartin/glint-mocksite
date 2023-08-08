// react-icons
import { RxOpenInNewWindow } from 'react-icons/rx'



// eslint-disable-next-line react/prop-types
export default function WorkCard({work}) {


  return (
    <a href={work.link} target='__blank' className="w-[min(100%,500px)] h-[500px] flex justify-center items-center bg-purple-400 overflow-hidden group relative select-none">
      <img src={work.image} alt="" className="min-w-max h-auto transition-transform duration-700   group-hover:scale-[1.2]" />
      
      <div className="absolute top-0 left-0 w-full h-full  group-hover:backdrop-brightness-[.2] transition-color duration-700
        flex justify-center items-center">
        <RxOpenInNewWindow className='text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
        <div className='absolute left-0 bottom-0 
          opacity-0 translate-y-10 transition-all duration-500
          group-hover:translate-y-0 p-8 group-hover:opacity-100'>
          <h3 className='uppercase font-bold text-[15px] tracking-widest' >{work.title}</h3>
          <h4 className='text-[13px] text-zinc-400' >{work.type}</h4>
        </div>
      </div>



    </a>
  )
}
