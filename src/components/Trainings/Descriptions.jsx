import React from 'react'
import trainer from '../../assets/trainings/trainer.jpg'
import individualIcon from "../../assets/products/individual-icon.svg";
import companiesIcon from "../../assets/products/group-icon.svg";
import enterprisesIcon from "../../assets/products/enterprises-icon.svg";

const Descriptions = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 p-2">
        <div className="descriptions flex flex-col gap-2">
            <h1 className='text-green-950 font-bold text-4xl'>We empower excellence through exemplary trainings and consulting</h1>
            <p>Our expert training and consulting solutions pave way for your organisation or individual success.</p>
            <button className='bg-gray-300 py-1 px-2 rounded-lg'>Register Now</button>
            <div className="companies flex border p-2 gap-2 rounded-lg text-xs">
              <div className="individuals flex gap-1">
                <img src={individualIcon} className='h-4'/>
                <span>Individuals</span>
                </div>
                <div className="individuals flex gap-1">
                <img src={companiesIcon} className='h-4'/>
                <span>Companies</span>
                </div>
                <div className="individuals flex gap-1">
                <img src={enterprisesIcon} className='h-4'/>
                <span>SME&apos;s</span>
                </div>
            </div>
        </div>
        <img src={trainer} className="rounded-lg mt-5" alt='farm trainer'/>
    </div>
  )
}

export default Descriptions