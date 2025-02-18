import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Logo from "../../assets/hero/hero-logo.svg";
import herobg1 from "../../assets/hero/hero-bg-desk-2.jpg";
import herobg2 from "../../assets/hero/hero-bg-desk-video.png";
import herobg3 from "../../assets/hero/hero-bg-desk-3.jpg";
import herobg4 from "../../assets/hero/hero-bg-desk-4.jpg";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Hero = () => {
  const [heroBackground, setHeroBackground] = useState(herobg1);
  const backgroundImages = [herobg1, herobg2, herobg3, herobg4];
const navigate = useNavigate();
  return (
    <>
      <div className="hero-container relative h-auto">
        <div className="cut-out h-12 w-12 bg-white absolute right-0 rounded-xl lg:w-[62%] lg:h-[4.5rem]"></div>
        <div
          className="hero-holder mx-auto mt-3 w-11/12 border rounded-3xl md:w-[98%]"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="logo mt-3 mx-4 w-28 md:w-40">
            <img src={Logo} />
          </div>
          <div className="header-writting text-white font-bold text-4xl p-2 md:text-7xl md:w-1/3 md:mt-10 md:mx-10">
            Training on Sustainable Farming
          </div>
          <div className="header-description glass m-2 p-2 md:mx-10 md:mt-10 md:w-1/2">
            Welcome to Maralife, your trusted partner in sustainable farming. We
            provide top-quality pesticide products to protect your crops and
            maximize yields.
          </div>
          <div className="font-bold mt-2 mx-auto md:mx-10 md:mt-10 header-buttons text-gray-700 bg-white w-[18rem] border border-gray-200 py-1 px-1 rounded-lg">
            <button className="bg-buttonHover rounded-lg mx-1 hover:bg-gray-300 active:bg-green-600 px-2 py-1"
            onClick={() => navigate(`/products#registration-form`) }
            >
              Register Now
            </button>
            <button className="bg-white rounded-lg mx-1 hover:bg-gray-300 active:bg-green-600 px-2 py-1"
              onClick={() => navigate( `/trainings`)}
           >
              Learn More
            </button>
          </div>
          <div className="header-navigation mt-4 text-white flex px-2 lg:justify-center">
            <div className="swiper-button-previous glass desktop text-white h-9 w-9 flex text-center items-center justify-center">
              <FaArrowLeft />
            </div>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-button-previous",
              }}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="custom-bullets glass ${className}"></span>`;
                },
              }}
              onSlideChange={(swiper) => {
                setHeroBackground(backgroundImages[swiper.activeIndex]);
              }}
            >
              {backgroundImages.map((_, index) => (
                <SwiperSlide key={index} className="opacity-5">x</SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-navigation-btn flex gap-2">
              <div className="swiper-button-previous mobile-swiper glass text-white h-9 w-9 flex text-center items-center justify-center">
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
