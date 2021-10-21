import React, {useState, useEffect} from "react";
import SimpleMap from './simpleMap'
import {  Link,  } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import AllAppointments from './AllAppointments'
function Appointment({currentUser,
    employee,
    startTime,
    endTime,
    date,
    service
}) {
    const [appointments, setAppointments] = useState(false);
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
    let start = startTime.toLocaleString('en-US', options);
    return (
        <div>
            {appointments === false  ? (
        <div>
             <Stack sx={{ width: '100%' }} direction="column" spacing={2}>
                    <Box component="h1" sx={{ display: 'inline' }}>{currentUser.name} Your Booking has been confirmed here are the details</Box>
                    <Divider variant="insert" />
                    <Box component="h3" sx={{ display: 'inline' }}>{date}</Box>
                    <Divider variant="insert" />
                    <Box component="h3" sx={{ display: 'inline' }}>{startTime}</Box>
                     <Divider variant="insert" />
                    <Box component="h3" sx={{ display: 'inline' }}>{endTime}</Box>
                     <Divider variant="insert" />
                    <Box component="h3" sx={{ display: 'inline' }}>{services.name}</Box>
                     <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>{employees.name}</Box>
                     <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>USD $ {services.hourly_rate}</Box>
                </Stack>
            {/* <h1>{currentUser.name} Your Booking has been confirmed here are the details</h1> 
            <p>Date: {date}</p>  
            <p>Start: {start}</p>
            <p>End: {endTime}</p>
            <p>Service: {services.name}</p>
            <p>Engineer: {employees.name}</p>
            <p> Rate: $ {services.hourly_rate}</p> */}
            <Button variant="contained" onClick={()=>setAppointments(true)}>
            <Typography variant="h6" component="h6" align="center">
             View All Appointments
            </Typography>
            </Button>
        </div>
            ) : (
                <div>
                {appointments === true && <AllAppointments currentUser={currentUser}/>}
                </div>
            )}
        </div>
    )
}

export default Appointment
