import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import jquery from 'jquery'
import Header from './../UI/Header'
import ms from 'ms'
@inject('store')
@observer
class About extends Component {
  constructor(props)
  {
    super(props)
    alert(jquery)
    const value = ms('2h')
  }
  render () {
    return (
      <div>
        <Header />  
        <h2>About</h2>
        <Link to='/find'>Find</Link>
      </div>
    )
  }
}

export default About
