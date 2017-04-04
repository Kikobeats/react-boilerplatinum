
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class test extends Component {
  render () {
      return (
            <div>
            Loaded async way (Check network in Developer Tools)
            <Link to="/protected">Protected</Link>
           </div>
        )
    }
}

export default test
