import Config from '../Config'
import jwt_decode from 'jwt-decode'

export async function login (email, password) {
  let objLogin =
    {
      user: null,
      token: null,
      status: null,
      error: true
    }

  try {
    const response = await fetch(Config.urlLogin, {
            /* eslint no-undef: 0 */
      method: 'POST',
      headers: {
        Accept: 'application/json' /* eslint quote-props: 0 */,
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(email + ':' + password)
      }
    })

    if (response.status !== 200) {
      objLogin.error = true
      objLogin.status = response.status
      return objLogin
    }

    const obj = await response.json()
    objLogin.token = obj.token
    objLogin.user = jwt_decode(obj.token)
    objLogin.error = false
    objLogin.status = response.status
    try {
      return objLogin
    } catch (error) {
      objLogin.error = true
      objLogin.status = 0
      return objLogin
    }
  } catch (e) {
    objLogin.error = true
    objLogin.status = 500
    return objLogin
  }
}
