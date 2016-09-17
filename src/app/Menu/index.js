import React from 'react'
import { Drawer } from 'rebass'

const Menu = ({ get }) => (
  <Drawer open={get('menuOpen')} />
)

export default Menu
