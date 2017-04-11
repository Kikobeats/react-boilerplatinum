import React from 'react'
import Bundle from '../../Utils/Bundle'
import loadAbout from 'bundle-loader?lazy&name=about!../../Components/About/about'



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
