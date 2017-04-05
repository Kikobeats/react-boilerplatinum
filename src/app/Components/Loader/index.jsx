import React, { Component } from 'react';

import { inject, observer } from 'mobx-react';

import './loader.scss';

@inject('store')
@observer
class Loader extends Component {
    constructor (props) {
        super(props);
        this.store = this.props.store;
    }

    render () {
        const isLoading = this.store.isLoading;
        return (
      isLoading ?
        <div className="sk-double-bounce">
          <div className="sk-child sk-double-bounce1" />
          <div className="sk-child sk-double-bounce2" />
        </div> :
        <div />
      );
    }
}

export default Loader;
