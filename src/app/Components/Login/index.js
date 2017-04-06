import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import './login.scss'

import { checkEmail, checkRequired } from '../../Utils/Validators'

@inject('store')
@observer
class Login extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
    this.login = this.login.bind(this)
    this.state =
    {
      isValid: false,
      processed: false
    }
  }

  login () {
    if (!checkEmail(this.emailInput.value) || !checkRequired(this.passwordInput.value)) {
      this.setState({
        isValid: false,
        processed: true
      })
      return
    }

    this.setState({
      isValid: true,
      processed: true
    })
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='form-signin'>
          <h2 className='form-signin-heading'>Admin</h2>
          <input type='text' ref={(input) => { this.emailInput = input }} className='form-control' name='email' placeholder='Email Address' />
          <input type='password' ref={(input) => { this.passwordInput = input }} className='form-control' name='password' placeholder='Password' />
          <button onClick={this.login} className='btn btn-lg btn-primary btn-block m-b-10' type='submit' >Login </button>
          {!this.state.isValid && this.state.processed ? <span className='label label-danger'>Please check the form</span> : null }
        </div>
      </div>
    )
  }
}

export default Login
