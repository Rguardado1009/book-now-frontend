import './Page.css'
import React from 'react'
import Button from '@mui/material/Button';
import '/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import {  Link,  } from 'react-router-dom';
import Services from './Services';
import Typography from '@mui/material/Typography';


export default function AuthLanding(currentUser) {
    return (
        <div className="container">
           <Typography gutterBottom variant="h1" component="h1" align="center">
             WELCOME 
            </Typography>
    <Stack direction="row" spacing={2}>
        <Link style={{ textDecoration: 'none' }} to="/booking">          
            <Button variant="contained" endIcon={<LoginIcon />}>
            <Typography  variant="h6" component="h6" align="center">
             Book NOW
            </Typography>
            </Button>
        </Link>
    </Stack>
  
        </div>
    )
}
