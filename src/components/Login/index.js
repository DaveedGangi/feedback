import {Component} from 'react'

import { Redirect } from 'react-router-dom'

import Cookies from 'js-cookie'



import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', isTrue: false}


  submitUserData = async (event) => {
    
    event.preventDefault()
    
    const {username, password} = this.state
    console.log(username, password)
    const userDetails = {username, password}

    const api = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(api, options)
    console.log(response)
    const responseToJson = await response.json()
    console.log(responseToJson)
    if (response.ok === true) {
      Cookies.set('jwt_token', responseToJson.jwt_token, {expires: 30})
      const {history} = this.props
      this.setState({isTrue: true})
      history.replace('/')
    } else {
      this.setState({
        errorMsg: responseToJson.error_msg,
        username: '',
        password: '',
      })
    }
  }

  storeUserName = event => {
    this.setState({username: event.target.value})
  }

  storeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, isTrue} = this.state
    console.log(username)
    console.log(password)
    console.log(isTrue)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
     return <Redirect to="/"/>
    }
    return (
         
            <div className="backgroundBgLogin">
              <div className="moviesHeadingLogin">
                <div>
                <img
                  className="website-image"
                  src="https://img.freepik.com/free-vector/customer-feedback-management-flat-vector-illustration-cartoon-happy-tiny-people-voting-giving-review-company-service-crm-advices-assessment-concept_74855-9834.jpg?w=1060&t=st=1714202753~exp=1714203353~hmac=8134730fadb5bad2aaa2809c57045777d1e8cc378998f3bec96c3a588542e630"
                  alt="login website logo"
                />
                </div>
              </div>

              <div className="bg-flexing-item">
                <form className="card-login" onSubmit={this.submitUserData}>
                  <h1 className="heading-login">Login</h1>
                  <label className="label-username" htmlFor="username">
                    USERNAME
                  </label>
                  <br />
                  <input
                    id="username"
                    value={username}
                    onChange={this.storeUserName}
                    className="username"
                    type="text"
                    placeholder="USERNAME"
                  />
                  <br />
                  <br />
                  <label className="label-password" htmlFor="password">
                    PASSWORD
                  </label>
                  <br />
                  <input
                    value={password}
                    onChange={this.storeUserPassword}
                    className="password"
                    type="password"
                    placeholder="PASSWORD"
                    id="password"
                  />
                  <br />
                  <p className="errorMsg">{errorMsg}</p>
                  <br />
                  <div>
                    <button className="login-button" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
       
     
    )
  }
}

export default Login