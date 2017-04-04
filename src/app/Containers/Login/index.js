import React from 'react'
import Bundle from '../../Utils/Bundle'
import loadLogin from 'bundle-loader?lazy&name=my-chunk!../../Components/Login'

// components load their module for initial visit
const LoginContainer = () => (
  <Bundle load={loadLogin}>
    {(Login) => Login
    ? <Login/>
    : <div>Loading...</div>
  }
  </Bundle>
)

export default LoginContainer