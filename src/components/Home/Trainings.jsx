import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import trainingPhoto1 from "../../assets/trainings/training-img1.jpg";
import trainingPhoto2 from "../../assets/trainings/trainig-img2.jpg";
import trainingPhoto3 from "../../assets/trainings/training-img3.jpg";
import trainingPhoto4 from "../../assets/trainings/training-img4.jpg";
import arrow from "../../assets/trainings/card-arrow.svg"
import "swiper/css";

const ourTrainings =[
  {
    id:1,
    trainingTopic:"Safe and Effective Pesticide Use",
    trainingDescription:"Learn effective, eco-friendly pest control methods with our biopesticide training. Master sustainable techniques to manage pests naturally, ensuring healthier crops, safer environments, and reduced chemical dependency for long-term agricultural success.",
    trainingImg:trainingPhoto1
  },
  {
    id:2,
    trainingTopic:"Integrated Pest Management",
    trainingDescription:"Learn effective, eco-friendly pest control methods with our biopesticide training. Master sustainable techniques to manage pests naturally, ensuring healthier crops, safer environments, and reduced chemical dependency for long-term agricultural success.",
    trainingImg:trainingPhoto2
  },
  {
    id:3,
    trainingTopic:"Pest and Disease Identification",
    trainingDescription:"Learn effective, eco-friendly pest control methods with our biopesticide training. Master sustainable techniques to manage pests naturally, ensuring healthier crops, safer environments, and reduced chemical dependency for long-term agricultural success.",
    trainingImg:trainingPhoto3
  },
  {
    id:4,
    trainingTopic:"Sustainable Farming practices",
    trainingDescription:"Learn effective, eco-friendly pest control methods with our biopesticide training. Master sustainable techniques to manage pests naturally, ensuring healthier crops, safer environments, and reduced chemical dependency for long-term agricultural success.",
    trainingImg:trainingPhoto4
  }
]
const Trainings = () => {
  return (
    <>
      <div className="trainings-container w-11/12 mx-auto mt-10">
        <h1 className="text-green-900 font-bold text-3xl m-1">Upcoming Trainings</h1>
        <p className="p-1">
          Learn effective, eco-friendly pest control methods with our
          biopesticide training. Master sustainable techniques to manage pests
          naturally, ensuring healthier crops, safer environments, and reduced
          chemical dependency for long-term agricultural success.
        </p>
        <button className="bg-buttonHover py-2 px-4 rounded-xl text-gray-900 ml-auto block">View All</button>
        <div className="cards mt-5">
          <Swiper
          spaceBetween={10}
          slidesPerView={1.25}
          >
            {ourTrainings.map((training)=>
            <SwiperSlide key={training.id}>
              <div className="card p-2 border border-gray-400 rounded-xl relative">
                <img className="arrow z-10 absolute right-1" src={arrow}/>
                <img className ="rounded-xl" src={training.trainingImg}/>
                <h1 className="my-1 text-xl font-medium text-green-900">{training.trainingTopic}</h1>
                <p>{training.trainingDescription}</p>
              </div>
            </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Trainings;
