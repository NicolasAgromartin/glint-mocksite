// content
import WorkCard from './WorkCard';
import { content, works } from './works.content';


export default function Works() {
  return (
    <div id='Works' className="w-full min-h-screen flex flex-col justify-start items-center">

      <div className="w-full h-[70vh] bg-[#111111] flex justify-center items-start pt-24">
        <div className="w-[min(90%,1000px)] border border-transparent flex flex-col justify-start items-center pb-10 border-b-zinc-800 text-center">
          <h3 className="text-primary text-[min(5vw,16px)] tracking-[3px] font-bold uppercase"> {content.h3} </h3>
          <h1 className="text-white text-[clamp(30px,6vw,50px)] font-bold"> {content.h1} </h1>
        </div>
      </div>

      <div className="w-full min-h-[100vh] flex flex-wrap justify-center items-start -translate-y-[15vw] ">
        {works.map((work,index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </div>
  )
}

