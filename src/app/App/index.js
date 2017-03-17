import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import CounterContainer from '../Containers/CounterContainer'

import NotMatch from '../Containers/NotMatch'
import Home from '../Components/Home'
import About from '../Containers/About' // async load route
import Topics from '../Components/Topics'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About (async load)</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/countercontainer">Counter Container</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/countercontainer" component={CounterContainer} />
            <Route component={NotMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}
