import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default UnauthenticatedApp