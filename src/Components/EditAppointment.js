import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom"
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import UpdateIcon from '@mui/icons-material/Update';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container, Grid } from "@material-ui/core";
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import DateAdapter from '@mui/lab/AdapterLuxon';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';



const EditAppointment = () => {
const history = useHistory()
const { id } = useParams();
const number = {id}.id;
console.log()
const [appointment, setAppointment] = useState([]);
const [employee, setEmployee] = useState('')
const [startTime, setStartTime] = useState('')
const [endTime, setEndTime] = useState('')
const [date, setDate] = useState('')
const [service, setService] = useState('')
const [errors, setErrors] = useState("");
const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/appointments/${number}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        start_time: startTime,
        end_time: endTime,
        date: date,
        // user_id: currentUser.id,
        service_id: service,
        employee_id: employee,
      })
    })
    .then(res => {
      if (res.ok) {
        window.location.reload(true);
    } else {
        res.json().then((errors) => {
          console.log(errors);
          setErrors(errors);
        })
      }
    })
}




useEffect(()=>{
  fetch(`http://localhost:3000/appointments/${number}`)
  .then((r) =>  {
    if (r.ok) {
      r.json().then((appointment) => {
        setAppointment(appointment)
      })
    } else {

    }
  })
}, [])
const handleDate = (newValue) => {
  let dateTime = (newValue.toUTC())
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

console.log(appointment.start_time)
const start =new Date(appointment.start_time)
const end = new Date(appointment.end_time)
let options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
};
let aptStart = start.toLocaleString('en-US', options);
let aptEnd = end.toLocaleString('en-US', options);

if(Object.keys(appointment).length !==0){
  return( 
  <div>
    <Container sx={{ width: '100%' }}  >
      <Grid sx={{ width: '100%' }}  spacing="6">
        <Card sx={{ width: '100%' }} evelation={6}>
          <CardHeader title="Appointment" subheader='Edit Info Below'/>
          <p>
            {errors ? (<>{errors.errors.map((error) => (
            <Stack sx={{ width: '100%' }} 
            justifyContent="center"
            alignItems="center"
            spacing={4}>
              <Alert fullWidth='true' variant="outlined" severity="error" style={{color: "red"}}>{error}</Alert> 
              </Stack>))}
              </>
              ) : (
              <></>
              )}
              </p>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  <Stack sx={{ width: '100%' }} direction="row" 
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}>
                    <Stack sx={{ width: '100%' }} direction="column" 
                      justifyContent="center"
                      alignItems="center"
                      spacing={4}>
                      <Box component="h3" sx={{ display: 'inline' }}>{appointment.service.name}</Box>
                      <Divider variant="insert" />
                      <Box component="h3" sx={{ display: 'inline' }}>{appointment.date}</Box>
                      <Divider variant="insert" />
                      <Box component="h3" sx={{ display: 'inline' }}>{aptStart}</Box>
                      <Divider variant="insert" />
                      <Box component="h3" sx={{ display: 'inline' }}>{aptEnd}</Box>
                      <Divider variant="insert" />
                      <Box component="h3" sx={{ display: 'inline' }}>{appointment.employee.name}</Box>
                      <Divider variant="insert" />
                      <Box component="h2" sx={{ display: 'inline' }}>USD $ {appointment.service.hourly_rate}</Box>
                      </Stack>
                      <Stack sx={{ width: '100%' }} direction="column" spacing={2}>
                    <Box
                      onSubmit={handleSubmit}
                      component="form"sx={{'& .MuiTextField-root': { m: 2, width: '25ch' },}}
                      validate
                      autoComplete="off">
                        <InputLabel variant="outlined" htmlFor="uncontrolled">
                          Services
                          </InputLabel>
                          <NativeSelect
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            inputProps={{
                              name: 'Service',
                              id: 'uncontrolled-native',}}>
                            <option value={1}>RECORDING SESSION</option>
                            <option value={2}>PREMIUM RECORDING SESSION</option>
                            <option value={3}>MIXING</option>
                            <option value={4}>MASTER</option>
                            <option value={5}>LIVE SOUND</option>
                          </NativeSelect>
                          <LocalizationProvider dateAdapter={DateAdapter}>
                            <Stack spacing={3}>
                              <DesktopDatePicker
                                label="Date"
                                inputFormat="MM/dd/yyyy"
                                value={date}
                                onChange={handleDate}
                                renderInput={(params) => <TextField {...params} />}/>
                            </Stack>
                            <TimePicker
                              label="Start Time"
                              value={startTime}
                              onChange={handleStart}
                              renderInput={(params) => <TextField {...params} />}/>
                            <TimePicker
                              label="End Time"
                              value={endTime}
                              onChange={handleEnd}
                              renderInput={(params) => <TextField {...params} />}/>
                          </LocalizationProvider>
                          <InputLabel variant="outlined" htmlFor="uncontrolled">
                            Employees
                          </InputLabel>
                          <NativeSelect
                          value={employee}
                          onChange={(e) => setEmployee(e.target.value)}
                          inputProps={{
                            name: 'Employees',
                            id: 'uncontrolled-native',}}>
                              <option value={1}>Engineer 1</option>
                              <option value={2}>Engineer 2</option>
                              <option value={3}>Engineer 3</option>
                              <option value={4}>Engineer 4</option>
                              <option value={5}>Engineer 5</option>
                          </NativeSelect>
                          <Button onClick={handleSubmit} variant="contained" endIcon={<UpdateIcon />}>
                            <Typography  variant="button" component="h6" align="center">
                              Update
                            </Typography>
                          </Button>
                      </Box>
                    </Stack>                    
              </Stack>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
        <Button onClick={()=> history.goBack()} variant="outlined" startIcon={<NavigateBeforeIcon />}>
          Back
        </Button>
    </Container>
</div>
)}
 else{
   return <h1>Appointment Does Not Exist</h1>
 }
}
export default EditAppointment
