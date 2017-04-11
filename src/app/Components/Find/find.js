
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import jquery from 'jquery'
import _ from 'lodash'

@inject('store')
@observer
class Find extends Component {
  constructor(props)
  {
    super(props)
    alert(jquery)
  }
  render () {
    return (
      <div>
        <h2>Find</h2>
        <Link to='/home'>Find</Link>
      </div>
    )
  }
}

export default Find
