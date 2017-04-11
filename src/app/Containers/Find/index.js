import React from 'react'
import Bundle from '../../Utils/Bundle'
import loadFind from 'bundle-loader?lazy&name=find!../../Components/Find/find'


// components load their module for initial visit
const FindContainer = ({...props}) => (
  <Bundle load={loadFind}>
    {(Find) => Find
      ? <Find {...props}/>
    : <div>Loading...</div>
  }
  </Bundle>
)

export default FindContainer