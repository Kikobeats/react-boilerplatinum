import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import './loader.scss'

@inject('store')
@observer
class Loader extends Component {

  constructor(props)
  {
    super(props)
    this.store = this.props.store
  }

  render () {
      const isLoading = this.store.isLoading
        return (
            isLoading
            ? <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
                : <div></div>
    )
  }
}

export default Loader
