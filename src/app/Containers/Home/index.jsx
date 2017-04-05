import React from 'react'
import Bundle from '../../Utils/Bundle'
import loadHome from 'bundle-loader?lazy&name=my-chunk!../../Components/Home'

// components load their module for initial visit
const HomeContainer = () => (
  <Bundle load={loadHome}>
    {(Home) => Home
    ? <Home/>
    : <div>Loading...</div>
  }
  </Bundle>
)

export default HomeContainer
