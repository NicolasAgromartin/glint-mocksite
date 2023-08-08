import { content, services } from "./services.content";


export default function Services() {
  return (
    <div id="Services" className="w-full min-h-screen flex flex-col justify-start items-center">

      <div className="w-[min(90%,1000px)] border border-transparent pt-28 flex flex-col justify-center items-center pb-10 border-b-zinc-300 text-center">
        <h3 className="text-primary text-[min(5vw,16px)] tracking-[3px] font-bold"> {content.h3} </h3>
        <h1 className="text-black text-[clamp(30px,6vw,50px)] font-bold"> {content.h1} </h1>
      </div>

      <div className="w-[min(100%,1200px)] h-auto flex flex-wrap justify-center items-center gap-8 pt-40 pb-20">
        { services.map( (Service,index) => (
          <div key={index} className="w-[min(100%,350px)] flex flex-col justify-start items-center gap-4 text-center
             p-10 px-4">
            <Service.icon className="text-primary text-[60px]"/>
            <h3 className="text-black text-[min(7vw,30px)] font-bold">{Service.name}</h3>
            <p className="text-zinc-500  leading-7 ">{Service.desc}</p>
          </div>  
        ))}
      </div>

    </div>
  )
}
