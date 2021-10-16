import './App.css';
import * as React from 'react';
import {useState, useEffect} from "react";
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Switch, Route, NavLink, useHistory } from 'react-router-dom'
import AuthLanding from './Components/AuthLanding';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Services from './Components/Services';
import Book from './Components/Book';
import Footer from './Components/Footer';
function AuthenticatedApp({ currentUser, setCurrentUser }) {
  
  const history = useHistory()
  const ref = React.useRef(null);
  const handleLogout = () => {
    fetch(`http://localhost:3000/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/landing')
        }
      })
  }
 

  return (
    <div className="App">
          <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          logged in as 
          <BottomNavigationAction label={`logged in as ${currentUser.username}`}/>
          <BottomNavigationAction label="Logout" icon={<LogoutIcon />} onClick={handleLogout} />
        </BottomNavigation>
      </Paper>
    </Box>
      <nav>
        {/* <span>
          <NavLink to="/groups">Groups</NavLink>{" - "}
          <NavLink to="/events">Events</NavLink>
        </span> */}
       
      </nav>
      <Switch>
        <Route path="/services" >
        <Services/>  
        </Route>
        <Route path="/booking" >
        <Book setCurrentUser={setCurrentUser} currentUser={currentUser} />  
        </Route>
        <Route path="/login" setCurrentUser={setCurrentUser}>
          <Login />
        </Route>
        <Route path="/signup" setCurrentUser={setCurrentUser}>
          <Signup />
        </Route>
        <Route path="/landing">
        <Landing setCurrentUser={setCurrentUser}/>  
        </Route>
        <Route path="/">
        <AuthLanding setCurrentUser={setCurrentUser}/>  
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;