import React, { Component } from 'react'
import { Container } from 'rebass'

import FilterMenu from '../FilterMenu'
import Header from '../Header'
import Menu from '../Menu'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

class App extends Component {
  state = {
    menuOpen: true,
    menuFilterOpen: false
  }

  toggle = (key) => {
    return (e) => {
      const val = !this.state[key]
      this.setState({ [key]: val })
    }
  }

  get = (key) => {
    return this.state[key]
  }

  render () {
    const { toggle, get } = this

    return (
      <Container>
        <Header toggle={toggle} />
        <Menu get={get} />
        <FilterMenu get={get} />
      </Container>
    )
  }
}

export default App
