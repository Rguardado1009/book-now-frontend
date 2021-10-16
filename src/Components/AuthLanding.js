import React from 'react'
import Button from '@mui/material/Button';
import '/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import {  Link,  } from 'react-router-dom';
import Services from './Services';


export default function AuthLanding() {
    return (
        <div className="container">
            <h1>Welcome</h1>
    <Stack direction="row" spacing={2}>
        <Link to="/booking">          
            <Button variant="contained" endIcon={<LoginIcon />}>
            BOOK NOW
            </Button>
        </Link>
    </Stack>
   <Services/>
        </div>
    )
}
