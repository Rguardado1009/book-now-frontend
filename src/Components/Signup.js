import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Landing from "/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css"

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
      })
    }
  
  return (
    <Box className="container"
    component="form" onSubmit={handleSubmit}
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
  <div className="authForm">
    
      <h1>Signup</h1>
      <p> {error.error}</p>
      <p>
      <TextField
        required
        id="standard-required"
        label="Username Required"
        defaultValue="username"
        variant="standard"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </p>
      
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      <p>
      <Fab variant="extended" size="medium" color="primary" 
      aria-label="add" type="submit">      
      <AssignmentIcon >Login</AssignmentIcon>
      <Typography variant="button" display="block" gutterBottom>
      Signup      
      </Typography>
      </Fab>
      
      <Link to="/login">
      <Fab variant="extended" size="medium" color="primary" 
      aria-label="add" type="submit">      
      <LoginIcon >Signup</LoginIcon>
      
      <Typography variant="button" display="block" gutterBottom>
      Login   
    </Typography>
    </Fab>
    </Link></p>
  </div>
  </Box>
  )
}

export default Signup
