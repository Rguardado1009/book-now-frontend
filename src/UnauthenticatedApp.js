import './App.css';
import React from 'react'
import { Switch, Route, Redirect,Link } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Landing from './Components/Landing'
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Services from './Components/Services';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import GlobalStyles from '@mui/material/GlobalStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components";

function UnauthenticatedApp({ setCurrentUser }) {
  // const history = useHistory()
  // const ref = React.useRef(null);
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };



  return (
    <div className='Unauth'>
     <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        style={{backgroundColor: '#009994', color: '#fffff'}}
        elevation={0}
        // sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        <LogoWrapper>
        <h3>
          Treehouse <span>Studios</span>
        </h3>
      </LogoWrapper>
      </Typography> 
          <nav>
            <Link to="/" 
          label={"Home"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction  icon={<HomeIcon/>}/> 
           </Link>
           <Link to="/services" 
          label={"services"} style={{ textDecoration: 'none'}}
          > 
          <BottomNavigationAction icon={<ListAltIcon/>}/> 
           </Link>
          </nav>
         
        </Toolbar>
      </AppBar>



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
      <Route path="*">
					<h1>404 not found</h1>
				</Route>
    </Switch>
    </div>
  )
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
export default UnauthenticatedApp