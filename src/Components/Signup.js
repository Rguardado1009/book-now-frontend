import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Signup({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user);
            history.push("/");
          });
        } else {
          res.json().then((error) => {
            console.log(error);
            setError(error);
          });
        }
      });
    }
  
  return (
    <div className="authForm">
      <form onSubmit={handleSubmit}>
      <p>
          
        </p>
        <h1>Sign Up</h1>
        <p>
          <label 
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>{error.username}</p>
        <p>
          <label 
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
       <p> {error.password} </p>
        <p><button type="submit">Sign Up</button></p>
        <p>-- or --</p>
        <p><Link to="/login">Log In</Link></p>
      </form>

    </div>
  )
}

export default Signup
