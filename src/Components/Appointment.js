import React, {useState, useEffect} from "react";
import {  Link,  } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import './Page.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import CardHeader from '@mui/material/CardHeader';

function Appointment({currentUser,
    employee,
    service,
    date,
    startTime,
    endTime
}) {

    const [employees, setEmployees] = useState([]);
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3000/employees/${employee}`, {credentials: 'include'})
        .then((r) => r.json())
        .then((employee) => setEmployees(employee));
        fetch(`http://localhost:3000/services/${service}`, {credentials: 'include'})
        .then((r) => r.json())
        .then((service) => setServices(service));
      }, [])
      let options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    let newStart = startTime.toLocaleString('en-US', options);
    let newEnd = endTime.toLocaleString('en', options);
    let aptDate = date.toLocaleString('en-US', options);
    console.log(aptDate)
    console.log(service)
    return (
        <div>

                 <Box
      sx={{display: 'flex',
        justifyContent:"center",
        alignItems:"center",
        gap: '10px',
        '& > :not(style)': {
          m: 6,
          width: '30vh',
          height: '45vh',
        },
    }}

    >
      <Card elevation={3}>
        
      <CardHeader title={`${currentUser.name} Your Booking has been confirmed here are the details`}/>

<List  sx={{ display: 'flex',
        justifyContent:"center", flexDirection:"column",
        width: '50%',maxWidth: 260, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Date" secondary={`${aptDate}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Start Time" secondary={`${newStart}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="End Time" secondary={`${newEnd}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Service" secondary={`${services.name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Engineer" secondary={`${employees.name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Rate" secondary={`USD $ ${services.hourly_rate}`} />
      </ListItem>
    </List>
      </Card>
    </Box>
    <Link  style={{ display: 'flex',
        justifyContent:"center", textDecoration: 'none' }} to="/appointment/all">
            <Button style={{backgroundColor: '#009994', color: '#ffff'}} variant="contained">
            <Typography variant="h6" component="h6" align="center">
             View All Appointments
            </Typography>
            </Button>
    </Link>
        </div>
    )
}

export default Appointment


