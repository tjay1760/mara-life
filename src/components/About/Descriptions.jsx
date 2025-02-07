import React from 'react'
import coreValuesimg from '../../assets/about/core-values.png'
import missionimg from '../../assets/about/mission.png'
import certificationimg from '../../assets/about/certifications.png'

const values = [
    {
        title: 'Core Values:',
        img: coreValuesimg,
        description: 'Core Values: Customer focus, speed, and agility.'
    },
    {
        title: 'Mission & Vision:',
        img: missionimg,
        description: 'Mission & Vision: From seed to harvest, we leverage technology, integrating genetics, quality-focused practices, and IPM strategies, to provide you with a complete solution.'
    },
    {
        title: 'Certifications:',
        img: certificationimg,
        description: 'Certifications: We implement GLP and HACCP practices in our laboratory.'
    }
]
const Descriptions = () => {
  return (
    <div className='descriptions-holder w-11/12 rounded-xl mx-auto bg-gray-300 md:flex mt-10'>
        {values.map((value, index) => (
            <div key={index} className='description flex flex-col items-center gap-2 p-2'>
                <h1 className='text-3xl font-bold text-green-900'>{value.title}</h1>
                <img src={value.img} className='h-20'/>
                <p className='statement mt-3 text-center'>{value.description}</p>
            </div>
        ))}
    
    
    
    </div>
  )
}

export default Descriptions    