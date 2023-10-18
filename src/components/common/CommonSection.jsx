
import React from 'react'
import './CommonSection.css'


const CommonSection = ({ title }) => {
  return <section className="common_section">
    <div className="text-center">
        <h1>{title}</h1>
    </div>
  </section>
}

export default CommonSection