// content
import { companies, content, comments } from "./clients.content"
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css/bundle';

export default function Clients() {



  return (
    <div id="Clients" className="w-full min-h-screen bg-zinc-200 flex flex-col justify-start items-center pt-32 gap-12 ">

      <div className="w-[min(90%,1000px)] flex flex-col justify-start items-center pb-10 text-center">
        <h3 className="text-primary text-[min(5vw,16px)] tracking-[3px] font-bold uppercase"> {content.h3} </h3>
        <h1 className="text-black text-[clamp(30px,6vw,50px)] font-bold"> {content.h1} </h1>
      </div>

      <Swiper className="w-full h-[300px] flex justify-center items-center "
        modules={[Pagination]}
        slidesPerView={3}
        pagination={{  clickable: true, }}
        style={{"--swiper-pagination-color": "#39b54a", "--swiper-pagination-bullet-inactive-color": "#a1a0a0",
            "--swiper-pagination-bullet-size": "10px"}}>

        {companies.map((Compnay,index) =>(
          <SwiperSlide key={index} className="w-full h-full  flex justify-center items-center gap-8">
            <Compnay.icon className="text-[clamp(60px,6vw,130px)] text-zinc-500 " />
          </SwiperSlide>
        ))}
      </Swiper>
          
      <Swiper className="border border-transparent border-t-zinc-300 w-[min(90%,800px)] h-auto py-20 flex justify-center items-center" modules={[Pagination]} pagination={{  clickable: true }} slidesPerView={1} style={{"--swiper-pagination-color": "#39b54a", "--swiper-pagination-bullet-inactive-color": "#a1a0a0",
            "--swiper-pagination-bullet-size": "10px"}}>
        {comments.map( (comment, index) => (
          <SwiperSlide key={index} className="w-full flex flex-col justify-start items-center gap-8">
            <p className="text-[clamp(17px,6vw,30px)] text-zinc-600 text-center leading-[50px]">{comment.comment}</p>
            <div className="flex flex-col justify-start items-center gap-2">
              <img src={comment.photo} alt="" className="rounded-full w-20"/>
              <h3 className="text-black font-bold">{comment.name}</h3>
              <h5 className="text-zinc-500">{comment.title}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full h-20 flex justify-center center-start">
        <span className="w-[2px] h-full bg-primary" />
      </div>
    </div>
  )
}

