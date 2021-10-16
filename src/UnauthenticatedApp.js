import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Landing from './Components/Landing'
function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/login">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default UnauthenticatedApp