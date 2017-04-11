import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import jquery from 'jquery'

@inject('store')
@observer
class Home extends Component {
  constructor(props)
  {
    super(props)
    alert(jquery)
  }
  render () {
    return (
      <div>
        <h2>Home</h2>
        <Link to='/about'>Home</Link>
      </div>

    )
  }
}

export default Home
