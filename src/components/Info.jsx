import React from 'react'
import './Info.css'

function Info() {
  return (
    <div className='w-full h-full rounded-tl-2xl rounded-tr-2xl overflow-hidden ' >
        <div className='info w-full px-16 pt-24 pb-14 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
            <div className='borde'>
                <div className='w-[80%] infotext'>
                    <p className='text-[53px] leading-none'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</p>
                </div>
            </div>
        </div>

        <div className='w-full bg-[#CDEA68] flex justify-center align-center center-info'>
            <div className="one">
                <p>What you can expect:</p>
            </div>
            <div className="two">
                <p>
                    We create tailored presentations to help you persuade your colleagues, clients or investors. Whether its live or digital, delivered for one or a hundred people.
                </p><br />
                <p>
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing and captivating.
                </p>
            </div>
            <div className="three">
                S:
                <div className='sociallinks'>
                    <a href="">Instagram</a>
                    <a href="">Behance</a>
                    <a href="">Facebook</a>
                    <a href="">Linkedin</a>
                </div>
            </div>
        </div>
        <div className='down-info w-full bg-[#CDEA68] rounded-bl-2xl rounded-br-2xl'>
            <div className='down-left'>
                <h2>Our approach</h2>
                <button className='readmore rounded-full mt-[10px] flex items-center gap-10'>READ MORE <div className='w-2 h-2 bg-zinc-100 rounded-full'></div></button>
            </div>
            <div className='down-right'>
                <img className='rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Info