// framer-motion
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
// react-spinner
import { Bars } from "react-loader-spinner"



export default function Loader() {

  const [ loadState, setLoadState ] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoadState(100)
    },1000)
  },[])

  return (
    <div className='w-full h-screen bg-black fixed top-0 left-0 flex justify-center items-center'>
      <motion.span initial={{width:0}} animate={{width:`${loadState}%`}} transition={{duration:1}}
        className="h-[2px] bg-primary absolute top-0 lef-0" />

      <Bars
          height = "15"
          width = "15"
          radius = "9"
          color = '#39b54a'
          ariaLabel="bars-loading"          
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />

    </div>
  )
}
