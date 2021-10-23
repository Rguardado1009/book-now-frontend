import './Page.css'
import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Landing from "/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css"
import Alert from '@mui/material/Alert';
function Login({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          res.json().then((errors) => {
            console.log(errors);
            setErrors(errors);
          })
        }
      })
  }
  return (
    <Box 
      component="form" onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
    <div >
      <Redirect to="/login" />
      
      <Typography gutterBottom variant="h2" component="h2">
              LOG IN
            </Typography>
        <p>
          {errors ? (
            <>

           <Alert variant="outlined" severity="error" style={{color: "red"}}>{errors.error}</Alert>
            </>
          ) : (
            <></>
          )}
        </p>
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
        <LoginIcon >Login</LoginIcon>
        <Typography variant="button" display="block" gutterBottom>
        Login      
        </Typography>
        </Fab>
        
        <Link style={{ textDecoration: 'none' }} to="/signup">
        <Fab variant="extended" size="medium" color="primary" 
        aria-label="add" type="submit">      
        <AssignmentIcon >Login</AssignmentIcon>
        <Typography variant="button" display="block" gutterBottom>
        Sign Up      
      </Typography>
      </Fab>
      </Link></p>
    </div>
    </Box>
  )
}

export default Login
