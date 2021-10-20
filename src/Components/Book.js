import * as React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Services from './Services'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Appointment from './Appointment'

import {useHistory, Route} from 'react-router-dom'
export default function Book({currentUser}) {
  const [employee, setEmployee] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [date, setDate] = useState('')
  const [service, setService] = useState('')
  const [errors, setErrors] = useState("");
  const [appointments, setAppointments] = useState(false);
  const history = useHistory()

  const handleSubmit = (event) => {
    
    event.preventDefault()
    fetch("http://localhost:3000/appointments", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        start_time: startTime,
        end_time: endTime,
        date: date,
        user_id: currentUser.id,
        service_id: service,
        employee_id: employee,
      })
    })
    .then(res => {
      if (res.ok) {
        setAppointments(true)
      } else {
        res.json().then((errors) => {
          console.log(errors);
          setErrors(errors);
        })
      }
    })
}
  
  
// const [services, setServices] = useState([]);
// useEffect(()=>{
//     fetch('http://localhost:3000/services/', {credentials: 'include'})
//     .then((r) => r.json())
//     .then((service) => setServices(service));
//   }, [])
// console.loge
  
    return (
      <div className="container">
       {appointments ===false  ? (
         <div>
           <Typography variant="h6" gutterBottom>
           Book Your Appointment
         </Typography>
             <p>
             {errors ? (
               <>
                 {errors.errors.map((error) => (
                   <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="outlined" severity="error" style={{color: "red"}}>{error}</Alert> </Stack>
                 ))}
               </>
             ) : (
               <></>
             )}
           </p>
           <Box
           onSubmit={handleSubmit}
           component="form"
           sx={{
             '& .MuiTextField-root': { m: 1, width: '25ch' },
           }}
           noValidate
           autoComplete="off"
           >
            
         <div>
             <Select
               type="select"
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={service}
               helperText="Select a Services "
               label=""
               defaultValue="Recording Session"
               onChange={(e) => setService(e.target.value)}
             >
               <MenuItem value={1}>RECORDING SESSION</MenuItem>
               <MenuItem value={2}>PREMIUM RECORDING SESSION</MenuItem>
               <MenuItem value={3}>MIXING</MenuItem>
               <MenuItem value={4}>MASTER</MenuItem>
               <MenuItem value={5}>LIVE SOUND</MenuItem>
             </Select>
         </div>
         <div>
             <TextField
               type="text"
               id="fullname"
               label="Full Name"
               // onChange={(e) => setName(e.target.value)}
               defaultValue={currentUser.name}        
             />
         </div>
         <div>
             <TextField
              type="date"
              name="date"
              value={date}
               required
               onChange={(e) => setDate(e.target.value)}
               helperText="Select a Date."
               />
         </div>
         <div>
             <TextField
              type="time"
              name="time"
              value={startTime}
               required
               onChange={(e) => setStartTime(e.target.value)}
               // defaultValue="Hello World"
               helperText="Select a start time"
             />
         </div>
         <div>
             <TextField
              type="time"
              name="time"
              value={endTime}
               required
               onChange={(e) => setEndTime(e.target.value)}
               // defaultValue="Hello World"
               helperText="Select a end time"
             />
         </div>
         <div>
           <Select
             type="select"
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={employee}
             helperText="Select an Employee to work with "
             label="Select Employee "
             defaultValue="Select Employee"
             onChange={(e) => setEmployee(e.target.value)}
           >
             <MenuItem value={1}>Engineer 1</MenuItem>
             <MenuItem value={2}>Engineer 2</MenuItem>
             <MenuItem value={3}>Engineer 3</MenuItem>
             <MenuItem value={4}>Engineer 4</MenuItem>
             <MenuItem value={5}>Engineer 5</MenuItem>
           </Select>
         </div>
           <Button onClick={handleSubmit} variant="contained" endIcon={<LoginIcon />}>
               <Typography  variant="button" component="h6" align="center">
                Book NOW
               </Typography>
               </Button>
        
         </Box>
         </div>
        ) : (
          <div className="appointment">
					{appointments === true && <Appointment currentUser={currentUser} 
          employee={employee}
          startTime = {startTime} 
          endTime = {endTime}
          date = {date}  
          service = {service} 
          />}
			</div>
        )
      }   
      </div>

    );
  }

  