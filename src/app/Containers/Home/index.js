import React from 'react'
import Bundle from '../../Utils/Bundle'
import loadHome from 'bundle-loader?lazy&name=home!../../Components/Home/home'


// components load their module for initial visit
const HomeContainer = ({...props}) => (
  <Bundle load={loadHome}>
    {(Home) => Home
      ? <Home {...props}/>
    : <div>Loading...</div>
  }
  </Bundle>
)

export default HomeContainer
