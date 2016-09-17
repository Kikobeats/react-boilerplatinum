import React from 'react'
import { Drawer } from 'rebass'

const Menu = (ctx) => {
  const { get, ...props } = ctx
  return (
    <Drawer {...props} open={get('menuOpen')} />
  )
}

export default Menu
