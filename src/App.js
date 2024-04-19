import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Info from './components/Info'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cardss from './components/Cardss'
import Ready from './components/Ready'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  document.addEventListener("contextmenu",function(e){
    e.preventDefault()
  },false)

  return (
    <div className='w-full min-h-screen  '>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <Eyes/>
      <Featured/>
      <Cardss/>
      <Ready/>
    </div>
  )
}

export default App