import {Redirect} from 'react-router-dom'

import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  BgContainerLogin,
  FormContainer,
  LogoLogin,
  Label,
  Input,
  CheckBoxContainer,
  CheckBox,
  LabelCheckBox,
  ButtonLogin,
  ErrorMsg,
} from './styledComponent'

import AllContext from '../../context/AllContext'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', isChecked: false}

  changeName = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  checkUserDetailes = async () => {
    const {username, password} = this.state
    const userDetiles = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetiles),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: `*${data.error_msg}`})
    }
  }

  clickLogin = event => {
    event.preventDefault()
    this.checkUserDetailes()
  }

  clickCheckBox = event => {
    this.setState({isChecked: event.target.checked})
  }

  render() {
    const {username, password, errorMsg, isChecked} = this.state
    const JwtToken = Cookies.get('jwt_token')
    if (JwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AllContext.Consumer>
        {value => {
          const {isLightModeOn} = value

          return (
            <BgContainerLogin isLightModeOn={isLightModeOn}>
              <FormContainer
                onSubmit={this.clickLogin}
                isLightModeOn={isLightModeOn}
              >
                {isLightModeOn ? (
                  <LogoLogin
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LogoLogin
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
                <Label htmlFor="username" isLightModeOn={isLightModeOn}>
                  USERNAME
                </Label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.changeName}
                />
                <Label htmlFor="password" isLightModeOn={isLightModeOn}>
                  PASSWORD
                </Label>
                <Input
                  type={isChecked ? 'text' : 'password'}
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={this.changePassword}
                  isLightModeOn={isLightModeOn}
                />
                <CheckBoxContainer>
                  <CheckBox
                    type="checkbox"
                    id="checkbox"
                    onChange={this.clickCheckBox}
                  />
                  <LabelCheckBox
                    htmlFor="checkbox"
                    isLightModeOn={isLightModeOn}
                  >
                    Show password
                  </LabelCheckBox>
                </CheckBoxContainer>
                <ButtonLogin type="submit">Login</ButtonLogin>
                <ErrorMsg>{errorMsg}</ErrorMsg>
              </FormContainer>
            </BgContainerLogin>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default Login
