
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import {
  Link
} from 'react-router-dom'

@inject('store')
@observer
class About extends Component {
  render () {
    return (
      <div>
        Loaded async way (Check network in Developer Tools)
            <Link to='/protected'>Protected</Link>
      </div>
    )
  }
}

export default About
