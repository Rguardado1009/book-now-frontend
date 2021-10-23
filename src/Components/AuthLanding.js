import './Page.css'
import React from 'react'
import Button from '@mui/material/Button';
import '/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import {  Link,  } from 'react-router-dom';
import Services from './Services';
import Typography from '@mui/material/Typography';
import logo from '/Users/ronald/development/Phase-5/book-now-frontend/src/Logo 3.PNG'


export default function AuthLanding(currentUser) {
    return (
    <div className="Auth-landing">

        <img src={logo} alt="Logo" />
        
        <Stack direction="row" 
            justifyContent="center"
            alignItems="center"
            spacing={4}
            width="50%"spacing={5}>
        <Link align="center" style={{ textDecoration: 'none' }} to="/booking">          
            <Button   style={{backgroundColor: '#009994', color: '#ffff'}}
            fullWidth="true" align="center" size="large" variant="contained" endIcon={<LoginIcon />}>
            <Typography  variant="h6" component="h6" align="center">
             Book NOW
            </Typography>
            </Button>
        </Link>
    </Stack>
  
        </div>
    )
}
