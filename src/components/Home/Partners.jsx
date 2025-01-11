import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Add this import
import { Navigation } from "swiper/modules";
import partner1 from "../../assets/partners/partner-1.png";  
import partner2 from "../../assets/partners/partner-2.png";  
import partner3 from "../../assets/partners/partner-3.png";  
import partner4 from "../../assets/partners/partner-4.png";  
import partner5 from "../../assets/partners/partner-5.png";  

const customStyles = `
.swiper-button-next,
.swiper-button-prev {
  color: #166534; /* Change to your desired color (using Tailwind's green-900) */
  background-color: white;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px; /* Adjust the arrow size */
}

.swiper-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
`;

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
    <div className='w-11/12 mx-auto mt-10'>
      <style>{customStyles}</style>
      <div className="partners-wrapper p-2 md:w-5/6 md:mx-auto md:mb-2">
        <h1 className="text-3xl font-bold text-green-950 mb-1 md:text-5xl">Our happy partners</h1>
        <p>We have worked with a few of the best in the farming industry </p>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={3.1}
        breakpoints={{
          768: {
            slidesPerView: 3.25
          },
          1024: {
            slidesPerView: 4.5
          }
        }}
        spaceBetween={1}
      >
        {ourPartners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <img src={partner.img} alt={`Partner ${partner.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;