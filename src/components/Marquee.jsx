import { motion } from "framer-motion"
import React from 'react'
import './Marquee.css'
import Info from '../components/Info'


function Marquee() {
  return (


     <div className="w-full min-h-screen">
        <div data-scroll data-scroll-speed='-.1' className='marq rounded-tl-2xl rounded-tr-2xl overflow-hidden'>
          <div className='texts'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[15vw]'>WE ARE OCHI</motion.h1>
            <motion.h1  initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[15vw]'>WE ARE OCHI</motion.h1>
            <motion.h1  initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[15vw]'>WE ARE OCHI</motion.h1>
          </div>
        </div>

        <div>
          <Info/>
        </div>

        

     </div>
    




  )
}

export default Marquee