import './App.css';
import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) { return <div></div>}

  return (
    <div className="App">
      <Router>
      {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser}
          />
        )
      }
    </Router>
     
  </div>
  );
}

export default App;
