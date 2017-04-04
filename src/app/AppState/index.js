import { observable, action } from 'mobx'
import axios from 'axios'

class appState {
  @observable authenticated
  @observable authenticating
  @observable isAdmin
  @observable isLoading

  constructor() {
    this.authenticated = false
    this.authenticating = false
    this.isAdmin = false
    this.isLoading = false
  }

  async fetchData (pathname, id) {
    let {data} = await axios.get(`https://jsonplaceholder.typicode.com${pathname}`)
    console.log(data)
    data.length > 0 ? this.setData(data) : this.setSingle(data)
  }

  @action authenticate () {
    return new Promise((resolve, reject) => {
      this.isLoading = true
      setTimeout(() => {
        this.authenticated = true
        this.isLoading = false
        resolve(this.authenticated)
      }, 2000)
    })
  }
}

export default appState
