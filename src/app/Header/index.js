import React from 'react'
import { Toolbar, NavItem, Space } from 'rebass'

const Header = ({ toggle }) => (
  <Toolbar>
    <NavItem is='a' small onClick={toggle('menuOpen')}>
      Menu
    </NavItem>
    <Space auto />
    <NavItem is='a' small onClick={toggle('menuFilterOpen')}>
      Filter
    </NavItem>
  </Toolbar>
)

export default Header
