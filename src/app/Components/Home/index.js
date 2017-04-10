import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Header from '../UI/Header'

@inject('store')
@observer
class Home extends Component {
  render () {
    return (
      <div>        
        <h2>Home</h2>
        <Link to='/protectedAdmin'>Private super admin Page 2</Link>
      </div>

    )
  }
}

export default Home
