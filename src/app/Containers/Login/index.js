import React from 'react'
import Bundle from '../../Utils/Bundle'
import loadLogin from 'bundle-loader?lazy&name=login!../../Components/Login'

// components load their module for initial visit
const LoginContainer = ({...props}) => (
  <Bundle load={loadLogin}>
    {(Login) => Login
    ? <Login {...props}/>
    : <div>Loading...</div>
  }
  </Bundle>
)

export default LoginContainer