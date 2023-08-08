// content
import { socialMediaIcons } from "../../../public/icons/socialMedia.icons";
import Form from "./Form";
import { content, information } from "./contact.content";


export default function Contact() {
  return (
    <div id="Contact" className="w-full min-h-screen flex flex-col justify-start items-center bg-contact bg-cover relative bg-no-repeat bg-center pb-40">
      <span className="w-full h-full bg-black/80 absolute top-0 left-0" />

      <div className="w-full min-h-screen flex flex-col justify-start items-center z-10 gap-20">
        <div className="w-full h-24 flex justify-center items-start gap-2">
          <span className="w-[2px] h-full bg-primary" />
        </div>
        
        <div className="w-[min(90%,1000px)] flex flex-col justify-center items-center pb-10 text-center ">
          <h3 className="text-primary text-[min(5vw,16px)] tracking-[3px] font-bold uppercase"> {content.h3} </h3>
          <h1 className="text-white text-[clamp(30px,6vw,50px)] font-bold"> {content.h1} </h1>
        </div>

        {/* form */}
        <div className="w-full h-auto flex flex-col justify-center items-center lg:flex-row gap-8">
          <span className="w-[min(100%,650px)] h-[700px] bg-black/50"> 
            <Form />
          </span>

          <span className=" w-[min(100%,350px)] h-[700px] text-[#444] bg-black flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-start items-center gap-4">
              <h4 className="text-primary">Where to Find Us</h4>
              <div className="w-full flex flex-col justify-start items-center gap-1">
                {information.direction.map((e,index) => <span key={index} >{e}</span>)}
              </div>
            </div>

            <div className="flex flex-col justify-start items-center gap-4">
              <h4 className="text-primary">Call Us At</h4>
              <div className="w-full flex flex-col justify-start items-center gap-1">
                {information.phones.map((e,index) => <span key={index} >{e}</span>)}
              </div>
            </div>

            <div className="flex flex-col justify-start items-center gap-4">
              <h4 className="text-primary">Email Us At</h4>
              <div className="w-full flex flex-col justify-start items-center gap-1">
                {information.email.map((e,index) => <span key={index} >{e}</span>)}
              </div>
            </div>

            <div className="w-full flex justify-center items-center gap-8 text-white text-xl">
              {socialMediaIcons.map((Social, index) => 
                <a href='#' target='__blank' key={index} className='hover:text-primary transition-color duration-500  ' > 
                  <Social.icon/> 
                </a>)} 
            </div>
          </span>
        </div>

      </div>



    </div>
    
  )
}
