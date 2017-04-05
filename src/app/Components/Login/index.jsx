import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import './login.scss'

@inject('store')
@observer
class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='form-signin'>
          <h2 className='form-signin-heading'>Admin</h2>
          <input type='text' className='form-control' name='username' placeholder='Email Address' required='' autoFocus='' />
          <input type='password' className='form-control' name='password' placeholder='Password' required='' />

          <button className='btn btn-lg btn-primary btn-block' type='submit'>Login</button>
        </div>
      </div>
    )
  }
}

export default Login
