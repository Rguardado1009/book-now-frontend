import React, {useState, useEffect} from "react";
import SimpleMap from './simpleMap'
import {  Link,  } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import './Page.css'
import AllAppointments from './AllAppointments'
function Appointment({currentUser,
    employee,
    service,
    date,
    startTime,
    endTime
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
    // let start = startTime.toLocaleString('en-US', options);
    // let end = endTime.toLocaleString('en-US', options);
    let newStart = startTime.toLocaleString('en-US', options);
    let newEnd = endTime.toLocaleString('en', options);
    let aptDate = date.toLocaleString('en-US', options);
    console.log(aptDate)
    console.log(newStart)
    return (
        <div>

        <div 
        className="Confirmed-Booking"
        >
             <Stack  sx={{ width: '50%' }} direction="column" spacing={2} align="center">
                    <Box component="h1" sx={{ display: 'inline' }}>{currentUser.name} Your Booking has been confirmed here are the details</Box>
                    <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>Date: {aptDate}</Box>
                    <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>Start Time:{newStart}</Box>
                    <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>End Time:{newEnd}</Box>
                     <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>Service: {services.name}</Box>
                     <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>Engineer: {employees.name}</Box>
                     <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>Rate: USD $ {services.hourly_rate}</Box>
                
            {/* <h1>{currentUser.name} Your Booking has been confirmed here are the details</h1> 
            <p>Date: {date}</p>  
            <p>Start: {start}</p>
            <p>End: {endTime}</p>
            <p>Service: {services.name}</p>
            <p>Engineer: {employees.name}</p>
            <p> Rate: $ {services.hourly_rate}</p> */}
            <Link to="/appointment/all">
            <Button style={{backgroundColor: '#009994', color: '#ffff'}} variant="contained" 
            // onClick={()=>setAppointments(true)}
            >
            <Typography variant="h6" component="h6" align="center">
             View All Appointments
            </Typography>
            </Button>
            </Link>
            </Stack>
        </div>
        </div>
    )
}

export default Appointment


