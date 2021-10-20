import React, {useState, useEffect} from "react";
import SimpleMap from './simpleMap'
import {  Link,  } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
            {appointments ===false  ? (
        <div>
            <h1>{currentUser.name} Your Booking has been confirmed here are the details</h1> 
            <p>Date: {date}</p>  
            <p>Start: {start}</p>
            <p>End: {endTime}</p>
            <p>Service: {services.name}</p>
            <p>Engineer: {employees.name}</p>
            <p> Rate: $ {services.hourly_rate}</p>
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
