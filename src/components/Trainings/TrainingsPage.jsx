import React from 'react'
import Partners from '../Home/Partners'
import Trainings from '../Home/Trainings'
import Hero from './Hero'
import Descriptions from './Descriptions'

const TrainingsPage = () => {
  return (
    <div className="trainings-page">
      <Hero />
      <Descriptions />
      <Trainings />
      <Partners />
    </div>
  )
}

export default TrainingsPage