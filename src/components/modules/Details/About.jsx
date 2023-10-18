
import React from 'react'
import CommonSection from '../../common/CommonSection'
import Details from '../Landing/Details'
import Brand from '../Landing/Brand'
import Review from '../Landing/Review'
import Team from '../Landing/Team'
import Questionnaire from '../Landing/Questionnaire'

const About = () => {
  return (
    <div>
      <CommonSection title="About" />
      <Details />
      <Brand />
      <Review />
      <Team />
      <Questionnaire />
    </div>
  )
}

export default About