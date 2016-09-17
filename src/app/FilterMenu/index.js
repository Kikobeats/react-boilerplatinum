import React from 'react'
import { Drawer } from 'rebass'

const FilterMenu = ({ get }) => (
  <Drawer position='right' open={get('menuFilterOpen')} />
)

export default FilterMenu
