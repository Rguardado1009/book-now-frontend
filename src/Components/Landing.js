import React from 'react'
import Button from '@mui/material/Button';
import '/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import {  Link,  } from 'react-router-dom'
import logo from '/Users/ronald/development/Phase-5/book-now-frontend/src/Logo 3.PNG'

export default function Landing() {
    return (
        <div className="Unauth-landing">

<img src={logo} alt="Logo" />
           
            
    <Stack className="Unauth-button-container" direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={4}
  width="50%">
        <Link  align="center" style={{ textDecoration: 'none' }} to="/signup">          
            <Button style={{backgroundColor: '#009994', color: '#ffff'}} align="center" size="large"  variant="contained" endIcon={<LoginIcon />}>
            BOOK NOW
            </Button>
        </Link>
        </Stack>
        </div>
    )
}
