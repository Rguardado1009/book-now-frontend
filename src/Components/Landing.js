import React from 'react'
import Button from '@mui/material/Button';
import '/Users/ronald/development/Phase-5/book-now-frontend/src/Landing.css';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {  Link,  } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="container">
            <h1>Welcome</h1>
    <Stack direction="row" spacing={2}>
        <Link to="/login">          
            <Button variant="contained" endIcon={<LoginIcon />}>
            SIGN IN
            </Button>
        </Link>
        <Link to="/signup">
            <Button variant="outlined" startIcon={<AssignmentIcon />}>
            SIGN UP
            </Button>
        </Link>
    </Stack>
    <br></br>
    <Link to="/signup">          
            <Button variant="contained" endIcon={<LoginIcon />}>
            BOOK NOW
            </Button>
        </Link>
        </div>
    )
}
