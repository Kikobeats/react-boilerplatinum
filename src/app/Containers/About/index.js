import React from 'react'
import Bundle from '../../Utils/Bundle'
import loadAbout from 'bundle-loader?lazy&name=[name]!../../Components/About'

// components load their module for initial visit
const AboutContainer = ({...props}) => (
  <Bundle load={loadAbout}>
    {(About) => About
    ? <About {...props}/>
    : <div>Loading...</div>
  }
  </Bundle>
)

export default AboutContainer
