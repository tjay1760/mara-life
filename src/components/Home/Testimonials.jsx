import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import farmerImg1 from "../../assets/testimonials/farmer-1.jpg";
import farmerImg2 from "../../assets/testimonials/farmer-2.jpg";
import farmerImg3 from "../../assets/testimonials/farmer-3.jpg";
import farmerImg4 from "../../assets/testimonials/farmer-4.jpg";
import testimonialBgImg from "../../assets/testimonials/testimonial-background-image.png";

const ourTestimonials = [
  {
    id: 1,
    name: "Damaris Nyaboke",
    occupation: "Farmer",
    img: farmerImg1,
    testimonial:
      "Mara Life's biopesticides transformed our farm! They're eco-friendly, effective, and keep our crops thriving while protecting the environment. A game-changer for sustainable agriculture.",
  },
  {
    id: 2,
    name: "Eugene Kimani",
    occupation: "Farmer",
    img: farmerImg2,
    testimonial:
      "Safe, natural, and powerful! Mara Life biopesticides gave us pest control without chemicals, ensuring healthier harvests. Highly recommend to all eco-conscious farmers.",
  },
  {
    id: 3,
    name: "Nibir Shakir",
    occupation: "Farmer",
    img: farmerImg3,
    testimonial:
      "With Mara Life, our farm saw fewer pests and better yields. No harsh chemicals, just nature's solutions. Perfect for modern, responsible farming practices!",
  },
  {
    id: 4,
    name: "William Kimandi",
    occupation: "Farmer",
    img: farmerImg4,
    testimonial:
      "Thanks to Mara Life, our fields are pest-free and flourishing. It's safe for our workers, crops, and the earth. Truly sustainable pest management!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-container w-11/12 mx-auto mt-10 p-2"
    >
      <div className="testimonial-description md:w-5/6 md:mx-auto md:mb-5">
      <h1 className="text-green-900 font-bold text-3xl md:text-5xl md:mb-2">
        Success stories from our farmers
      </h1>
      <p>
        Discover how sustainable farming has had an impact on farmers and
        agricultural professions.
      </p>
      </div>
      
      <div className="testimonial-card-holder rounded-xl md:flex md:justify-end"
       style={{
        backgroundImage:`url(${testimonialBgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
    }}
      >
        <div className="swiper-holder">
        <Swiper
                 spaceBetween={10}
         slidesPerView={1.25}
         breakpoints={{
           768:{
             slidesPerView: 2.5
           },
           1024:{
             slidesPerView: 2.5
           }
         }}
         className="half"
        >
          {ourTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="full-card relative text-white rounded-xl p-5 text-center overflow-v">
                <img
                  className="absolute w-20 h-20 rounded-full z-10 top-16 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-lg"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <div className="testimonial-holder glass mt-20 p-4 pt-14"> 
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm italic">{testimonial.occupation}</p>
                  <p className="testimonial mt-2">{testimonial.testimonial}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
