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
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Popover from '@mui/material/Popover';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookOnlineSharpIcon from '@mui/icons-material/BookOnlineSharp';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GlobalStyles from '@mui/material/GlobalStyles';
import styled from "styled-components";
import Button from '@mui/material/Button';
import UserAccount from './Components/UserAccount';
import Employees from './Components/Employees';


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
        <Link to="/"  label={"Home"} style={{ textDecoration: 'none'}}
          > 
        <LogoWrapper>
        <h3>
          Treehouse <span>Studios</span>
        </h3>
      </LogoWrapper>
      </Link>
      </Typography> 
          {/* <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
           Book Now
          </Typography> */}
          <nav>
            {/* <Link to="/" 
          label={"Home"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction  icon={<HomeIcon/>}/> 
           </Link> */}
          <Link to="/booking" 
          label={"booking"} style={{ textDecoration: 'none'}}
          > 
          
          {/* <BottomNavigationAction icon={<BookOnlineSharpIcon/>}/>  */}
          <Button style={{backgroundColor: '#009994', color: '#292929'}}  align="center" size="medium"  variant="text" endIcon={<BookOnlineSharpIcon />}>
            Book Now
            </Button>
           </Link>
          <Link to="/appointment/all" 
          label={"Appointments"} style={{ textDecoration: 'none'}}
          > 
          {/* <BottomNavigationAction icon={<CalendarTodayIcon/>}/>  */}
          <Button style={{backgroundColor: '#009994', color: '#292929'}}  align="center" size="medium"  variant="text" endIcon={<CalendarTodayIcon />}>
            Appointments
            </Button>
           </Link>
           <Link to="/employees" label={"employees"} style={{ textDecoration: 'none'}}> 
          <Button style={{backgroundColor: '#009994', color: '#292929'}}  align="center" size="medium"  variant="text" endIcon={<ListAltIcon />}>
            Employees
            </Button>
           </Link>
           <Link to="/services" label={"services"} style={{ textDecoration: 'none'}}> 
          <Button style={{backgroundColor: '#009994', color: '#292929'}}  align="center" size="medium"  variant="text" endIcon={<ListAltIcon />}>
            Services
            </Button>
           </Link>
           <Link to="/reviews" 
          label={"reviews"} style={{ textDecoration: 'none'}}
          > 
          {/* <BottomNavigationAction icon={<ReviewsIcon/>}/>  */}
          <Button style={{backgroundColor: '#009994', color: '#292929'}}  align="center" size="medium"  variant="text" endIcon={<ReviewsIcon/>}>
            Reviews
            </Button>
           </Link>
          </nav>
          {/* <IconButton onClick={handleClick}  style={{backgroundColor: '#009994', color: '#292929'}} href="#" variant="outlined" 
           >
             {<AccountCircleIcon/>}
             </IconButton> */}
             <Button onClick={handleClick} style={{backgroundColor: '#009994', color: '#292929'}}  align="center" size="medium"  variant="text" endIcon={<AccountCircleIcon />}>
            Account
            </Button>
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
              <Link to="/user" label={"user"} style={{ textDecoration: 'none'}}> 
              <Typography style={{ color: '#292929'}} sx={{ p: 1 }}> Account Info </Typography>
              </Link>
          
          <Typography  onClick={handleLogout} sx={{ p: 1 }}>Log Out</Typography>
                </Popover>
        </Toolbar>
      </AppBar>



      <Switch>

        <Route path="/user" >
        <UserAccount currentUser={currentUser}/>  
        </Route>
        <Route path="/reviews" >
        <AllReviews currentUser={currentUser}/>  
        </Route>
        <Route path="/employees" >
        <Employees/>  
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