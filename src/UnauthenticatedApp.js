import './App.css';
import React from 'react'
import {useState, useEffect} from "react";
import { Switch, Route, Redirect,Link } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Landing from './Components/Landing'
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Services from './Components/Services';
import Book from './Components/Book';
import Footer from './Components/Footer';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function UnauthenticatedApp({ setCurrentUser }) {
  // const history = useHistory()
  const ref = React.useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div className='homePage'>
        <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <Link to="/" 
          label={"Home"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction icon={<HomeIcon/>}/> 
           </Link>
          <Link to="/services" 
          label={"services"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction icon={<ListAltIcon/>}/> 
           </Link>
         
          {/* <BottomNavigationAction autofocus label="Logout" icon={<LogoutIcon />} 
          onClick={handleLogout} /> */}
        </BottomNavigation>
      </Paper>
    </Box>


    <Switch>
      <Route path="/services" >
        <Services/>  
      </Route>
      <Route exact path="/login">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Redirect to="/" />
    </Switch>

    </div>
  )
}

export default UnauthenticatedApp