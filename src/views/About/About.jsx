// content
import { content, stats } from "./about.content";


export default function About() {
  return (
    <div id="About" className="relative w-full min-h-screen bg-primary flex flex-col justify-start items-center pb-20">

      <div className="w-full h-24 absolute top-0 right-0 flex justify-end items-start gap-2 pr-12 ">
        <span className="w-[2px] h-full bg-white" />
      </div>

      <div className="w-auto border border-transparent border-b-white/60 pt-28 flex flex-col justify-center items-center pb-10">
        <h3 className="text-black text-[min(5vw,16px)] tracking-[3px] font-bold"> {content.h3} </h3>
        <h1 className="text-white text-[clamp(30px,6vw,78px)] font-bold"> {content.h1} </h1>
      </div>

      <div className="w-[min(90%,1024px)] text-black flex justify-center items-center pt-12 text-center">
        <p className="leading-[30px] md:text-xl lg:text-2xl md:leading-[40px] lg:leading-[50px]">{content.p}</p>
      </div>

    <div className="w-full flex flex-wrap justify-center items-center gap-10 pt-20">
      {stats.map((stat,index) => (
        <div className="p-4 font-bold flex flex-col justify-center items-center " key={index} >
          <span className="text-[75px]">{stat.number}</span>
          <h5 className="text-black text-xl">{stat.title}</h5>
        </div>
      ))}
    </div>
  

    </div>
  )
}
