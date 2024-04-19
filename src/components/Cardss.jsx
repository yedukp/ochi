import React from 'react'

function Cardss() {
  return (
    <div className='w-full h-screen px-16 gap-5 items-center flex'>
        <div className="cardcontainer w-1/2 h-[55vh] w-1/2">
            <div className="card rounded-2xl bg-[#004D43] w-full h-full flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="img" />
            </div>
        </div>
        <div className="cardcontainer w-1/2 h-[55vh] flex gap-5">
            <div className="card rounded-2xl bg-[#212121] w-1/2 h-full flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="img" />
            </div>
            <div className="card rounded-2xl bg-[#212121] w-1/2 h-full flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Cardss