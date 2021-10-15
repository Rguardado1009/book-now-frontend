import './App.css';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';

import { Switch, Route, NavLink, useHistory } from 'react-router-dom'

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
          history.push('/')
        }
      })
  }
  return (
    <div className="App">
      <nav>
        {/* <span>
          <NavLink to="/groups">Groups</NavLink>{" - "}
          <NavLink to="/events">Events</NavLink>
        </span> */}
        <span>Logged in as {currentUser.username} </span>
        <Fab variant="extended" size="medium" color="primary" aria-label="add" onClick={handleLogout}>      
        <LogoutIcon >Logout</LogoutIcon>
        <Typography variant="button" display="block" gutterBottom>
          Logout
      </Typography>
      </Fab>
      </nav>
      {/* <Switch>
        <Route path="/groups">
          <GroupsContainer />
        </Route>
        <Route path="/events">
          <EventsContainer />
        </Route>
      </Switch> */}
    </div>
  );
}

export default AuthenticatedApp;