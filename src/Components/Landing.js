import React from 'react'
import Button from '@mui/material/Button';
import '/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {  Link,  } from 'react-router-dom'
import logo from '/Users/ronald/development/Phase-5/book-now-frontend/src/Logo 3.PNG'

export default function Landing() {
    return (
        <div className="Unauth-landing">

<img src={logo} alt="Logo" />
            {/* <Typography gutterBottom variant="h1" component="h1" 
           align="center"
           >
             WELCOME 
            </Typography> */}
            
    <Stack className="Unauth-button-container" direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={4}
  width="50%">
        <Link  align="center" style={{ textDecoration: 'none' }} to="/login">          
            <Button style={{backgroundColor: '#009994', color: '#ffff'}} fullWidth="true" align="center" size="large"  variant="contained" endIcon={<LoginIcon />}>
            SIGN IN
            </Button>
        </Link>
        <Link align="center" style={{ textDecoration: 'none' }} to="/signup">
            <Button style={{backgroundColor: '#009994', color: '#ffff'}} fullWidth="true" align="center" size="large" variant="outlined" startIcon={<AssignmentIcon />}>
            REGISTER
            </Button>
        </Link>
        </Stack>
    <br></br>
    <Link  align="center" style={{ textDecoration: 'none' }} to="/signup">          
            <Button style={{backgroundColor: '#009994', color: '#ffff'}} align="center" size="large"  variant="contained" endIcon={<LoginIcon />}>
            BOOK NOW
            </Button>
        </Link>
        </div>
    )
}
