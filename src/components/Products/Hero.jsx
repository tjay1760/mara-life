import React from 'react'
import Logo from '../../assets/hero/hero-logo.svg';
import bgImage from "../../assets/hero/herobg2.png"

const Hero = () => {
  return (
    <div className='w-11/12 bg-green-950 mx-auto rounded-xl mt-5 p-2'
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
    }}
    >
      <img src={Logo} className='h-10'/>
<h1 className='text-white text-4xl font-bold mt-5'>Our Products</h1>
    </div>
  )
}

export default Hero