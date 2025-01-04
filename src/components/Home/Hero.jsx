import React from 'react'
import Logo from '../../assets/hero/hero-logo.svg'

const Hero = () => {
  return (
<>
<div className="hero-container relative min-h-0">
    <div className="cut-out h-12 w-12 bg-white absolute right-0 rounded-xl md:w-[62%] md:h-[3.8rem]"></div>
    <div className="hero-holder bg-green-950 h-lvh mx-auto mt-3 w-11/12 border rounded-3xl md:w-[98%]">
    <div className="logo mt-3 mx-4 w-28">
        <img src={Logo}/>
        </div>
    <div className="header-writting text-white font-bold text-4xl p-2">
        Training on Sustainable Farming
    </div>
    <div className="header-description glass m-2"> 

Welcome to Maralife your trusted partner in sustainable farming. We provide top-quality pesticide products to protect your crops and maximize yields.</div>
    <div className="font-bold mt-2 mx-auto header-buttons text-gray-700 bg-white w-11/12 border border-gray-900 p-2 rounded-2xl">
        <button className='bg-white rounded-lg mx-1 hover:bg-gray-300 active:bg-green-600 p-2'>Register Now</button>
        <button className='bg-white rounded-lg mx-1 hover:bg-gray-300 active:bg-green-600 p-2'>Learn More</button>
    </div>
    <div className="header-navigation"></div>
    </div>
</div>
</>
  )
}

export default Hero