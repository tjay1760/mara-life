import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import partner1 from "../../assets/partners/partner-1.png";  
import partner2 from "../../assets/partners/partner-2.png";  
import partner3 from "../../assets/partners/partner-3.png";  
import partner4 from "../../assets/partners/partner-4.png";  
import partner5 from "../../assets/partners/partner-5.png";  

const ourPartners = [
  {
    id: 1,
    img: partner1,
  },
  {
    id: 2,
    img: partner2,
  },
  {
    id: 3,
    img: partner3,
  },
  {
    id: 4,
    img: partner4,
  },
  {
    id: 5,
    img: partner5,
  },
];

const Partners = () => {
  return (
    <div className='border border-red-800 w-11/12 mx-auto'>
        <div className="partners-wrapper">
        <h1>Our happy partners</h1>
        <p>We have worked with a few of the best in the farming industry </p>
        </div>
<Swiper>
  <SwiperSlide>1</SwiperSlide>
    <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>1</SwiperSlide>
</Swiper>

    </div>
  )
}

export default Partners