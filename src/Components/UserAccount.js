import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import UserEdit from './UserEdit'

export default function UserAccount({currentUser}) {

  let FullName = currentUser.name
  let Initial = FullName.charAt(0)

    return (
        <div>
                <Box
      sx={{display: 'flex',
        justifyContent:"center",
        gap: '10px',
        '& > :not(style)': {
          m: 6,
          width: '30vh',
          height: '40vh',
        },
    }}

    >
      <Card elevation={3}>
        
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#292929' }} aria-label="recipe">
           {Initial}
          </Avatar>
        }
        
      title="My Account"/>

<List  sx={{ display: 'flex',
        justifyContent:"center", flexDirection:"column",
        width: '50%', maxWidth: 260, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Full Name" secondary={`${currentUser.name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Username" secondary={`${currentUser.username}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Email" secondary={`${currentUser.email}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Total Appointments" secondary={`${currentUser.appointments.length}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Total Reviews" secondary={`${currentUser.reviews.length}`} />
      </ListItem>
    </List>
      <UserEdit currentUser={currentUser}/>
      </Card>
    </Box>
           
        </div>
    )
}
