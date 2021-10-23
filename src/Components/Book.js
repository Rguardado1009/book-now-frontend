import * as React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Services from './Services'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Appointment from './Appointment'
import NativeSelect from '@mui/material/NativeSelect';
import {useHistory, Route} from 'react-router-dom'
import DateAdapter from '@mui/lab/AdapterLuxon';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import './Page.css'


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
         <div>
          
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
           <Box className="Bookings-Box"
           onSubmit={handleSubmit}
           component="form"
           sx={{
             '& .MuiTextField-root': { m: 2, width: '25vh' },
           }}
           noValidate
           autoComplete="off"
           >
          <Typography variant="h4" gutterBottom>
           Book Your Appointment
         </Typography>
{/*             
            <InputLabel variant="outlined" htmlFor="uncontrolled">
          Services
        </InputLabel>
         */}
        <NativeSelect
        
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
        
             <TextField
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
        
         <InputLabel variant="outlined" htmlFor="uncontrolled">
          Employees
        </InputLabel>
        <br></br>
        <NativeSelect
            value={employee}
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
           <Button  onClick={handleSubmit} variant="contained" endIcon={<LoginIcon />}>
               <Typography  variant="button" component="h6" align="center">
                Book NOW
               </Typography>
               </Button>
        
         </Box>
         <p>{setDate}</p>
         </div>
        ) : (
          <div className="appointment">
					{appointments === true && <Appointment date={date} startTime={startTime} endTime={endTime} currentUser={currentUser} 
          employee={employee}
          service = {service} 
          />}
			</div>
        )
      }   
<Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>

      </div>

    );
  }

  