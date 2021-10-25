import './App.css';
import * as React from 'react';
import {useState} from "react";
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import AuthLanding from './Components/AuthLanding';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Services from './Components/Services';
import Book from './Components/Book';
import Appointment from './Components/Appointment';
import EditAppointment from './Components/EditAppointment';
import AllAppointments from './Components/AllAppointments';
import AllReviews from './Components/AllReviews';
import Checkout from './Components/Checkout';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Popover from '@mui/material/Popover';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookOnlineSharpIcon from '@mui/icons-material/BookOnlineSharp';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GlobalStyles from '@mui/material/GlobalStyles';
import styled from "styled-components";
import logo from "/Users/ronald/development/Phase-5/book-now-frontend/src/Logo 3 copy 2.PNG";
function AuthenticatedApp({ currentUser, setCurrentUser }) {
  
  const history = useHistory()
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
        <LogoWrapper>
        <h3>
          Treehouse <span>Studios</span>
        </h3>
      </LogoWrapper>
      </Typography> 
          {/* <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
           Book Now
          </Typography> */}
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
           <Link to="/reviews" 
          label={"reviews"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction icon={<ReviewsIcon/>}/> 
           </Link>
          </nav>
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
        <AllReviews currentUser={currentUser}/>  
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
        <Route path="/checkout" >
        <Checkout setCurrentUser={setCurrentUser} currentUser={currentUser} />  
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
const LogoWrapper = styled.div`
  h3 {
    color: #292929;
    text-align: left;
    font-size: 22px;
  }
  span {
    color: #fff;
    font-weight: 300;
    font-size: 18px;
  }
`;
export default AuthenticatedApp;