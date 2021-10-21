import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom"
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
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



const EditAppointment = () => {
const history = useHistory()
const { id } = useParams();
const number = {id}.id;
const [appointment, setAppointment] = useState([]);





useEffect(()=>{
  fetch(`http://localhost:3000/appointments/${number}`)
  .then((r) =>  {
    if (r.ok) {
      r.json().then((appointment) => {
        setAppointment(appointment)
        setStartTime({oldStartTime})
      })
    } else {

    }
  })
}, [])




const start = new Date(appointment.start_time)
const end = new Date(appointment.end_time)
let options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
};
let apptStartTime = start.toLocaleString('en-US', options);
let apptEndTime = end.toLocaleString('en-US', options);
let newOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
};
let oldStartTime = start.toLocaleString('en-US', newOptions);
let oldEndTime = end.toLocaleString('en-US',newOptions);
const diff = start - end;
const duration = new Date(diff).getHours();

const [employee, setEmployee] = useState('')
const [startTime, setStartTime] = useState('')
const [endTime, setEndTime] = useState('')
const [date, setDate] = useState('')
const [service, setService] = useState('')
const [errors, setErrors] = useState("");
console.log(startTime);
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
if(Object.keys(appointment).length !==0){
  return( 
<div>

<Container sx={{ width: '100%' }} className="App-header" >
<Grid sx={{ width: '100%' }}  spacing="12">
<Card sx={{ width: '100%' }} lg={6} evelation={6}>
           
                <CardHeader 
                
                title="Appointment"
                
                subheader='Edit Info Below'
                />
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
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
                <Stack sx={{ width: '100%' }} direction="column" spacing={2}>
                    <Box component="h3" sx={{ display: 'inline' }}>{appointment.service.name}</Box>
                    <Divider variant="insert" />
                    <Box component="h3" sx={{ display: 'inline' }}>{appointment.date}</Box>
                    <Divider variant="insert" />
                    <Box component="h3" sx={{ display: 'inline' }}>{apptStartTime}</Box>
                     <Divider variant="insert" />
                    <Box component="h3" sx={{ display: 'inline' }}>{apptEndTime}</Box>
                     <Divider variant="insert" />
                    <Box component="h3" sx={{ display: 'inline' }}>{appointment.employee.name}</Box>
                     <Divider variant="insert" />
                    <Box component="h2" sx={{ display: 'inline' }}>USD $ {appointment.service.hourly_rate}</Box>
                </Stack>
                
                <Stack sx={{ width: '100%' }} direction="column" spacing={2}>
                    
<Box
           onSubmit={handleSubmit}
           component="form"
           sx={{
             '& .MuiTextField-root': { m: 2, width: '25ch' },
           }}
           validate
           autoComplete="off"
           >
            
         <InputLabel variant="outlined" htmlFor="uncontrolled">
          Services
        </InputLabel>
        <br></br>
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

             {/* <Select
               type="select"
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={service}
               helperText="Select a Services "
               label=""
               defaultValue={appointment.service.id}
               onChange={(e) => setService(e.target.value)}
             >
               <MenuItem value={1}>RECORDING SESSION</MenuItem>
               <MenuItem value={2}>PREMIUM RECORDING SESSION</MenuItem>
               <MenuItem value={3}>MIXING</MenuItem>
               <MenuItem value={4}>MASTER</MenuItem>
               <MenuItem value={5}>LIVE SOUND</MenuItem>
             </Select> */}
    
        
         <div>
             <TextField
             required
              id="date"
              label="Date"
              type="date"
              value={date}
              sx={{ width: 220 }}
              InputLabelProps={{shrink: true,}}
               onChange={(e) => setDate(e.target.value)}/>
         </div>
         {console.log(appointment)}
         <div>
             <TextField
             required
              id="time"
              label="Start Time"
              type="time"
              value={startTime}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 900, // 5 min
              }}
              sx={{ width: 150 }}
               
               onChange={(e) => setStartTime(e.target.value)}
            //    defaultValue={oldStartTime}
             />
         </div>
         <div>
             <TextField
              required
              id="time"
              label="End Time"
              type="time"
              value={endTime}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 900, // 5 min
              }}
              sx={{ width: 150 }}
               
               onChange={(e) => setEndTime(e.target.value)}
               // defaultValue="Hello World"
             />
         </div>
         <div>
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
         </div>
         <br></br>
           <Button onClick={handleSubmit} variant="contained" endIcon={<ModeEditIcon />}>
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
