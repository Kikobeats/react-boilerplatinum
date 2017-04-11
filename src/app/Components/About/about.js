import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import jquery from 'jquery'

@inject('store')
@observer
class About extends Component {
  constructor(props)
  {
    super(props)
    alert(jquery)
  }
  render () {
    return (
      <div>
        <h2>About</h2>
        <Link to='/find'>Find</Link>
      </div>
    )
  }
}

export default About
