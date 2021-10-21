import './App.css';
import * as React from 'react';
import {useState, useEffect} from "react";
import { Switch, Route, Link, useHistory } from 'react-router-dom'
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
import AuthLanding from './Components/AuthLanding';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Services from './Components/Services';
import Book from './Components/Book';
import Footer from './Components/Footer';
import Appointment from './Components/Appointment';
import AllAppointments from './Components/AllAppointments';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EditAppointment from './Components/EditAppointment';

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
    <div className="App">
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
          <Link to="/appointment/all" 
          label={"Appointments"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction icon={<CalendarTodayIcon/>}/> 
           </Link>
           <Link to="/services" 
          label={"services"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction icon={<ListAltIcon/>}/> 
           </Link>
          {/* <BottomNavigationAction autofocus label="Logout" icon={<LogoutIcon />} 
          onClick={handleLogout} /> */}
          <BottomNavigationAction onClick={handleClick} icon={<AccountCircleIcon/>}/>            
              <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
          <Typography sx={{ p: 2 }}>Logged in as {currentUser.name}</Typography>
          <Typography  onClick={handleLogout} sx={{ p: 2 }}>Log Out</Typography>
                </Popover>
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
        <Route path="/appointment/all" >
        <AllAppointments setCurrentUser={setCurrentUser} currentUser={currentUser}/>  
        </Route>
        <Route path="/appointment/:id" >
        <EditAppointment setCurrentUser={setCurrentUser} currentUser={currentUser}/>  
        </Route>
        <Route path="/appointment/" >
        <Appointment  currentUser={currentUser}/>  
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
        {/* <Route path="/landing">
        <Landing setCurrentUser={setCurrentUser}/>  
        </Route> */}
        <Route path="/">
        <AuthLanding setCurrentUser={setCurrentUser}/>  
        </Route>
        <Route path="*">
					<h1>404 not found</h1>
				</Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;