import { observable, action, computed } from 'mobx'

class AppState {
  @observable isLoading
  @observable authUser=
  {
    token: null,
    isAdmin: false,
    isSuperAdmin: false,
    email: null,
    nickName: null
  }
  constructor () {
    this.authUser =
    {
      token: null,
      isAdmin: false,
      isSuperAdmin: false,
      email: null,
      nickName: null
    }

    this.isLoading = false
  }

  @action('Set user auth')
  setUser (user) {
    this.authUser.token = user.token
    this.authUser.isAdmin = user.isAdmin
    this.authUser.email = user.emal
    this.authUser.isSuperAdmin = user.isSuperAdmin
    this.authUser.photo = user.photo
    this.authUser.nickName = user.nickName
  }

  @action('Show Loader')
  showLoader () {
    this.isLoading = true
  }
  @action('Hide Loader')
  hideLoader () {
    this.isLoading = false
  }

  @computed get authenticated () {
    if (this.authUser.token === null) {
      return false
    } else {
      return true
    }    
  }

  @computed get isAdmin () {
    return this.authUser.isAdmin
  }

  @computed get isSuperAdmin () {
    return this.authUser.isSuperAdmin
  }
}

const appState = new AppState()

export default appState
