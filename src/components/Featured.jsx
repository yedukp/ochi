import React from 'react'
import './Featured.css'
import { motion, useAnimation } from "framer-motion"


function Featured() {

  const cards = [useAnimation(), useAnimation()]

  const handleHover = (index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"})
  }
  
  return (
    <div className='featured w-full'>
      <div>
        <h1 className='heading'>Featured projects</h1>
      </div>
      <div className='px-12 w-full'>
        <div className="cards flex gap-4 w-full mt-10">
          <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="card-container relative w-1/2 h-[75vh]">
            <div className="card  w-full h-full rounded-2xl overflow-hidden">
              <h1 className='headonhover flex overflow-hidden absolute z-[9] left-full -translate-x-[40%] top-1/2 -translate-y-1/2'>{"FYDE".split('').map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.33, 1, 0.68, 1], delay:index*.05}} className='inline-block'>{item}</motion.span>
              ))}</h1>
              <img className='rounded-2xl w-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="img" />
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="card-container relative w-1/2 h-[75vh]">
            <div className="card  w-full h-full rounded-2xl overflow-hidden">
              <h1 className='headonhover flex overflow-hidden absolute z-[9] right-full translate-x-[50%] top-1/2 -translate-y-1/2'>
                {"VISE".split('').map((item, index) => (
                <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.33, 1, 0.68, 1], delay:index*.05}} className='inline-block'>{item}</motion.span>
                  ))}
              </h1>
              <img className='rounded-2xl w-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="img" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured