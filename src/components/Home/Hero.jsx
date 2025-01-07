import React , {useState}from "react";
import Logo from "../../assets/hero/hero-logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import herobg1 from "../../assets/hero/herobg1.png"
import herobg2 from "../../assets/hero/herobg2.png"
import herobg3 from "../../assets/hero/herobg3.png"
import herobg4 from "../../assets/hero/herobg4.jpg"

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";


const Hero = () => {
    const [heroBackground, setHeroBackground] = useState(herobg1);
    const backgroundImages = [herobg1,herobg2,herobg3,herobg4]
  return (
    <>
      <div className="hero-container relative h-auto">
        <div className="cut-out h-12 w-12 bg-white absolute right-0 rounded-xl md:w-[62%] md:h-[3.8rem]"></div>
        <div className="hero-holder mx-auto mt-3 w-11/12 border rounded-3xl md:w-[98%]"
        style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="logo mt-3 mx-4 w-28 md:w-40">
            <img src={Logo} />
          </div>
          <div className="header-writting text-white font-bold text-4xl p-2 md:text-7xl md:w-1/3 md:mt-10 md:mx-10">
            Training on Sustainable Farming
          </div>
          <div className="header-description glass m-2 p-2 md:mx-10 md:mt-10 md:w-1/2">
            Welcome to Maralife your trusted partner in sustainable farming. We
            provide top-quality pesticide products to protect your crops and
            maximize yields.
          </div>
          <div className="font-bold mt-2 mx-auto md:mx-10 md:mt-10 header-buttons text-gray-700 bg-white w-[18rem] border border-gray-900 p-2 rounded-2xl">
            <button className="bg-white rounded-lg mx-1 hover:bg-gray-300 active:bg-green-600 p-2">
              Register Now
            </button>
            <button className="bg-white rounded-lg mx-1 hover:bg-gray-300 active:bg-green-600 p-2">
              Learn More
            </button>
          </div>
          <div className="header-navigation mt-4 text-white  flex items-center justify-between px-2">
            <Swiper
            className="border-red-700"
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-button-previous",
              }}
              pagination={{ clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="custom-bullets glass ${className}"></span>`;
                  },
               }}
               onSlideChange={(swiper) => {

                setHeroBackground(backgroundImages[swiper.activeIndex]);
              }}
            >
              <SwiperSlide>1</SwiperSlide>
              <SwiperSlide>2</SwiperSlide>
              <SwiperSlide>3</SwiperSlide>
              <SwiperSlide>4</SwiperSlide>
            </Swiper>
          
            <div className="swiper-navigation-btn flex gap-2">
            <div className="swiper-button-previous glass text-white h-9 w-9 flex text-center items-center justify-center">
  <FaArrowLeft />
</div>

<div className="swiper-btn-next glass text-white h-9 w-9 flex text-center items-center justify-center">
  <FaArrowRight />
</div>      
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Hero;
