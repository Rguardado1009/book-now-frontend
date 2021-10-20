import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Landing from "/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css"
import Alert from '@mui/material/Alert';

function Signup({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setErrors] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name,
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
            setErrors(error);
          });
        }
      })
    }
  
  return (
    <Box className="container"
    component="form" onSubmit={handleSubmit}
    sx={{
      '& .MuiTextField-root': { m: 1, width: '40ch' },
    }}
    noValidate
    autoComplete="off"
  >
  <div className="authForm">
  <Typography gutterBottom variant="h2" component="h2" align="center">
              SIGN-UP
            </Typography>
  
  <p>{error ? (
            <>
              {error.errors.map((error) => (
                <Alert variant="outlined" severity="error" style={{color: "red"}}>{error}</Alert>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
      
      <p>
      <TextField
        required
        id="standard-required"
        label="Email"
        defaultValue="Email"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </p>
      <p>
      <TextField
        required
        id="standard-required"
        label="Full Name"
        defaultValue="full name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </p>
      <p>
      <TextField
        required
        id="standard-required"
        label="Username"
        defaultValue="username"
        variant="standard"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </p>
      
      <TextField
        required
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
