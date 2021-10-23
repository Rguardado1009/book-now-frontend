import './App.css';
import * as React from 'react';
import {useState, useEffect} from "react";
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import AuthLanding from './Components/AuthLanding';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Services from './Components/Services';
import Book from './Components/Book';
import Appointment from './Components/Appointment';
import AllAppointments from './Components/AllAppointments';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EditAppointment from './Components/EditAppointment';
import BookOnlineSharpIcon from '@mui/icons-material/BookOnlineSharp';
import Reviews from './Components/Reviews';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
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
    <div className="Auth">
          {/* <Box className ="Auth-box" sx={{ pb: 0 }} ref={ref}>
      <CssBaseline/>

      <Paper className ="Auth-box"  
      // variant='permanent' sx={{ position: 'fixed', top: 0, bottom: '95', right: '50%', left:'50%'}} elevation={4}
      >
        <BottomNavigation
      
          >
          <Link to="/" 
          label={"Home"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction style={{backgroundColor: '#009994', color: '#292929'}} icon={<HomeIcon/>}/> 
           </Link>
          <Link to="/booking" 
          label={"booking"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction style={{backgroundColor: '#009994', color: '#292929'}} icon={<BookOnlineSharpIcon/>}/> 
           </Link>
          <Link to="/appointment/all" 
          label={"Appointments"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction style={{backgroundColor: '#009994', color: '#292929'}} icon={<CalendarTodayIcon/>}/> 
           </Link>
           <Link to="/services" 
          label={"services"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction style={{backgroundColor: '#009994', color: '#292929'}} icon={<ListAltIcon/>}/> 
           </Link>
          {/* <BottomNavigationAction autofocus label="Logout" icon={<LogoutIcon />} 
          onClick={handleLogout} /> 
          <BottomNavigationAction style={{alignItems: 'center'}} onClick={handleClick} icon={<AccountCircleIcon/>}/>            
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
          <Typography sx={{ p: 1 }}>Logged in as {currentUser.name}</Typography>
          <Typography  onClick={handleLogout} sx={{ p: 1 }}>Log Out</Typography>
                </Popover>
        </BottomNavigation>
      </Paper>
    </Box> */}

<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        style={{backgroundColor: '#009994', color: '#ffffff'}}
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
           Book Now
          </Typography>
          <nav>
            <Link to="/" 
          label={"Home"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction  icon={<HomeIcon/>}/> 
           </Link>
          <Link to="/booking" 
          label={"booking"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction icon={<BookOnlineSharpIcon/>}/> 
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
          </nav>
          {/* <BottomNavigationAction onClick={handleClick} icon={<AccountCircleIcon/>}/>             */}
              {/* <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
          <Typography sx={{ p: 1 }}>Logged in as {currentUser.name}</Typography>
          <Typography  onClick={handleClick} sx={{ p: 1 }}>Log Out</Typography>
                </Popover> */}
          <IconButton onClick={handleClick}  style={{backgroundColor: '#009994', color: '#292929'}} href="#" variant="outlined" 
           >
             {<AccountCircleIcon/>}
             </IconButton>
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
          <Typography sx={{ p: 1 }}>Logged in as {currentUser.name}</Typography>
          <Typography  onClick={handleLogout} sx={{ p: 1 }}>Log Out</Typography>
                </Popover>
        </Toolbar>
      </AppBar>



      <Switch>
        <Route path="/reviews" >
        <Reviews currentUser={currentUser}/>  
        </Route>
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