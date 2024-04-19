import React, { useEffect, useState } from 'react'
import './Eyes.css'

function Eyes() {

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
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className='eyesmain relative w-full h-full'>
        <div className='theeyes flex gap-10 absolute'>
          <div className="w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-3/5 h-3/5 rounded-full bg-zinc-900 relative">
              <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-3/5 h-3/5 rounded-full bg-zinc-900 relative">
            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes