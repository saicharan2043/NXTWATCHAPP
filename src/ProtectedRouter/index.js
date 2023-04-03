import {Redirect, Route} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRouter = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRouter
