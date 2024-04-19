import React from 'react'
import './LandingPage.css'
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion"

function LandingPage() {


  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.7' className=' w-full h-screen zz pt-1'>
      <div className="text-structure mt-40 px-12">
        <div className="masker ">
          <h1 className=" text-[9vw] leading-[6.3vw]">WE CREATE</h1>
        </div>
        <div className="masker flex ">
          <motion.div initial={{width:0}} animate={{width:'9vw'}} transition={{ease:[0.87, 0, 0.13, 1],duration:1}} style={{backgroundImage:"url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')", backgroundPosition:"center", backgroundSize:"cover"}} className="w-[9vw] bg-red-500 h-[6vw] relative rounded me-[13px] top-[.7vw]"></motion.div>
          <h1 className=" text-[9vw] leading-[6.3vw]">EYE OPENING</h1>
        </div>
        <div className="masker">
          <h1 className=" text-[9vw] leading-[6.3vw]">PRESENTATIONS</h1>
        </div>
      </div>

      <div className="border-t-[1px] border-zinc-400 flex justify-between items-center py-3 px-12 mt-28">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className='text-lg font-dark tracking-tight leading-none'>{item}</p>)}
        <div className='start flex'>
            <div className="startbtn">
            <button class="card__btn">START THE PROJECT</button>
            </div>
            <div className='arrow'>
            <FaArrowUp style={{transform:"rotate(45deg)"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage