import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom"
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container, Grid } from "@material-ui/core";
import NativeSelect from '@mui/material/NativeSelect';
import DateAdapter from '@mui/lab/AdapterLuxon';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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


const [checkService, setCheckService] = useState(true)
    const [checkDate, setCheckDate] = useState(true)
    const [checkStart, setCheckStart] = useState(true)
    const [checkEnd, setCheckEnd] = useState(true)
    const [checkEngineer, setCheckEngineer] = useState(true)
    // const [checkRate, setCheckRate] = useState(true)
    const [error, setErrors] = useState("");

    const [open, setOpen] = useState(false);
        const handleClickOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        };
    
    //     let FullName = currentUser.name
    //     let Initial = FullName.charAt(0)
if(Object.keys(appointment).length !==0){
  return( 
  <div>
       <Box
      sx={{display: 'flex',
        justifyContent:"center",
        gap: '10px',
        '& > :not(style)': {
          m: 6,
          width: '30vh',
          height: '45vh',
        },
    }}

    >
    <Container sx={{ width: '100%' }}  >
      <Grid sx={{ width: '100%' }}  spacing="2">
      <Card elevation={3}>
      <CardHeader
      title="My Appointment"/>
          <p>
            {error ? (<>{error.errors.map((error) => (
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
                      <Stack sx={{ width: '100%' }} direction="column" spacing={2}>
                      <List  sx={{ display: 'flex',
        justifyContent:"center", flexDirection:"column",
        width: '50%', maxWidth: 260, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemText primary="Service" secondary={`${appointment.service.name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Date" secondary={`${appointment.date}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Start Time" secondary={`${aptStart}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="End Time" secondary={`${aptEnd}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Engineer" secondary={`${appointment.employee.name}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Rate" secondary={`USD $ ${appointment.service.hourly_rate}`} />
      </ListItem>
    </List>

    <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Update Appointment Below</DialogTitle>
      
        <p>{error ? (
            <>
              {error.errors.map((error) => (
                <Alert variant="outlined" severity="error" style={{color: "red"}}>{error}</Alert>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <DialogContent>
          <DialogContentText>
            Please Check the field you'd like to update.
          </DialogContentText>
          
          <Stack
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Stack sx={{ width: '100%' }} direction="row" 
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}>
    
            <Checkbox onChange={(e) => setCheckService(!checkService)}  /> 
            <ListItem>
        <ListItemText primary="Service" secondary={  
                    <NativeSelect
                    disabled={checkService}
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        inputProps={{
                            name: 'Service',
                            id: 'controlled-native',}}>
                    <option value={1}>RECORDING SESSION</option>
                    <option value={2}>PREMIUM RECORDING SESSION</option>
                    <option value={3}>MIXING</option>
                    <option value={4}>MASTER</option>
                    <option value={5}>LIVE SOUND</option>
                    </NativeSelect>} />
        </ListItem>
            </Stack>
            <LocalizationProvider dateAdapter={DateAdapter}>
     <Stack direction="row">

     <Checkbox onChange={(e) => setCheckDate(!checkDate)} />  
        <DesktopDatePicker
         disabled={checkDate}
        label="Date"
        inputFormat="MM/dd/yyyy"
        value={date}
        onChange={handleDate}
        renderInput={(params) => <TextField {...params} />}/>
    </Stack>

    <Stack direction="row">
       <Checkbox onChange={(e) => setCheckStart(!checkStart)}/>
       <TimePicker
        disabled={checkStart}
       label="Start Time"
       value={startTime}
       onChange={handleStart}
       renderInput={(params) => <TextField {...params} />}/>
    </Stack>

     <Stack direction="row">
     <Checkbox onChange={(e) => setCheckEnd(!checkEnd)} /> 
     <TimePicker
         disabled={checkEnd}
        label="End Time"
        value={endTime}
        onChange={handleEnd}
        renderInput={(params) => <TextField {...params} />}/>
    </Stack>
    </LocalizationProvider>
     <Stack direction="row">
     <Checkbox onChange={(e) => setCheckEngineer(!checkEngineer)} /> 
        <ListItem>
        <ListItemText primary="Employee" secondary={  
                      <NativeSelect
                      disabled={checkEngineer}
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
                     </NativeSelect> }/>
          </ListItem>
                    
    </Stack>
    </Stack>
    </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>

        </DialogActions>
      </Dialog>
                  <Button style={{backgroundColor: '#009994', color: '#ffff'}} variant="outlined" onClick={handleClickOpen}>
       Edit Appointment
       </Button>
                    {/* </Stack>                     */}
              </Stack>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
        <Button onClick={()=> history.goBack()} variant="outlined" startIcon={<NavigateBeforeIcon />}>
          Back
        </Button>
    </Container>
    </Box>
</div>
)}
 else{
   return <h1>Appointment Does Not Exist</h1>
 }
}
export default EditAppointment
