import React, { useEffect, useState } from 'react'
import './Ready.css'

function Ready() {

    const [rotate, setRotate] = useState(0)

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX
      let mouseY = e.clientY

      let diffX = mouseX - window.innerWidth/2
      let diffY = mouseY - window.innerHeight/2

      var angle = Math.atan2(diffY, diffX) * (180/Math.PI);
      setRotate(angle-180)
    })
  })

  return (
    <div data-scroll data-scroll-speed='.7' className='w-full h-[100vh] bg-[#CDEA68] flex overflow-hidden items-center'>
        <div className='w-full h-full flex headingready'>
            <h1 className='ready' >READY</h1> <h1 className='ready' >TO START</h1><h1 className='ready' > THE PROJECT?</h1>
        </div>
    </div>
  )
}

export default Ready