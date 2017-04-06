import React from 'react'
import Bundle from '../../Utils/Bundle'
import loadAbout from 'bundle-loader?lazy&name=my-chunk!../../Components/About'

// components load their module for initial visit
const AboutContainer = () => (
  <Bundle load={loadAbout}>
    {(About) => About
    ? <About />
    : <div>Loading...</div>
  }
  </Bundle>
)

export default AboutContainer
