import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Appointment from './Appointment'
import NativeSelect from '@mui/material/NativeSelect';
import {useHistory} from 'react-router-dom'
import DateAdapter from '@mui/lab/AdapterLuxon';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import styled from "styled-components";

import './Page.css'

const Container = styled.div`

  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #0E0F13;
    font-weight: bold;
    font-size: 20px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
  h5 {
    color: #0E0F13;
    font-weight: bold;
    margin-top: 1rem;
    font-size: 15px;    
  }
`;

const LogoWrapper = styled.div`
  }
  h3 {
    color: #009994;
    text-align: center;
    font-size: 22px;
    
  }
  span {
    color: #0E0F13;
    /* font-weight: 300; */
    font-size: 22px;
  }
`;

export default function Book({currentUser}) {
  const [employee, setEmployee] = useState(1)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [date, setDate] = useState('')
  const [service, setService] = useState(1)
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
const handleDate = (newValue) => {
  let dTime = (newValue.toUTC())
  let dateTime = (dTime.toUTC())
  setDate(dateTime)
};
const handleStart = (newValue) => {
  let sTime = (newValue.toUTC())
  let start = sTime.toJSDate()
  setStartTime(start)
};
const handleEnd = (newValue) => {
  let eTime = newValue.toUTC()
  let end = eTime.toJSDate()
  setEndTime(end)
};
    return (
      <div className="Bookings-page">
       {appointments ===false  ? (
         <Container >
          
           
           <Box className="Bookings-Box"
           onSubmit={handleSubmit}
           component="form"
           sx={{
             '& .MuiTextField-root': { m: 2, width: '25vh' },
           }}
           noValidate
           autoComplete="off"
           >
               <p>
             {errors ? (
               <>
                 {errors.errors.map((error) => (
                   <Stack sx={{ width: '100%' }} spacing={4}>
                <Alert variant="outlined" severity="error" 
                style={{color: "red"}}
                >
                  <strong>{error}</strong>
                  </Alert> 
                </Stack>
                 ))}
               </>
             ) : (
               <></>
             )}
           </p>
           <LogoWrapper>
        <h3>
          Book <span>Your Session</span>
        </h3>
      </LogoWrapper>
        <Typography variant="h5" gutterBottom>
            Select Service
         </Typography>
{/*             
            <InputLabel variant="outlined" htmlFor="uncontrolled">
          Services
        </InputLabel>
         */}
        <NativeSelect className="Bookings-service-select"
       style={{textAlignLast:"center"}}
            value={service}
            onChange={(e) => setService(e.target.value)}
          inputProps={{
            name: 'Service',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>RECORDING SESSION</option>
          <option value={2}>PREMIUM RECORDING SESSION</option>
          <option value={3}>MIXING</option>
          <option value={4}>MASTER</option>
          <option value={5}>LIVE SOUND</option>
        </NativeSelect>
        <br></br>
             <TextField className="Bookings-name"
               type="text"
               id="fullname"
               label="Full Name"
               // onChange={(e) => setName(e.target.value)}
               defaultValue={currentUser.name}        
             />
        
         <LocalizationProvider dateAdapter={DateAdapter}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={handleDate}
          renderInput={(params) => <TextField {...params} />}
        />
           </Stack>   
         {/* onChange={(e) => setDate(e.target.value)} */}
             <TimePicker
              label="Start Time"
              value={startTime}
              onChange={handleStart}
              renderInput={(params) => <TextField {...params} />}
             />
         <TimePicker
              label="End Time"
              value={endTime}
              onChange={handleEnd}
              renderInput={(params) => <TextField {...params} />}
             />
         </LocalizationProvider>        
         <Typography variant="h5" gutterBottom>
            Select Employees
         </Typography>
        <NativeSelect
            value={employee}
            style={{textAlignLast:"center"}}
            onChange={(e) => setEmployee(e.target.value)}
          inputProps={{
            name: 'Employees',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>Engineer 1</option>
          <option value={2}>Engineer 2</option>
          <option value={3}>Engineer 3</option>
          <option value={4}>Engineer 4</option>
          <option value={5}>Engineer 5</option>
        </NativeSelect>
       
         <br></br>
           <Button  style={{backgroundColor: '#009994', color: '#ffff'}} 
           onClick={handleSubmit} variant="contained" endIcon={<LoginIcon />}>
               <Typography  variant="button" component="h6" align="center">
                Book NOW
               </Typography>
               </Button>
        
         </Box>
         <p>{setDate}</p>
         </Container>
        ) : (
          <div className="appointment">
					{appointments === true && <Appointment date={date} startTime={startTime} endTime={endTime} currentUser={currentUser} 
          employee={employee}
          service = {service} 
          />}
			</div>
        )
      }   
      </div>

    );
  }

  