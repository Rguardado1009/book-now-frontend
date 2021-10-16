import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Services from './Services'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Select from '@mui/material/Select';
// import Stack from '@mui/material/Stack';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import TimePicker from '@mui/lab/TimePicker';
// import DateTimePicker from '@mui/lab/DateTimePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
export default function Book({currentUser}) {
  const [name, setName] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [date, setDate] = useState('')
  const [service, setService] = useState('')

    return (
      <div>
      <FormControl fullWidth>
    
        <Box
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
          <MenuItem value={10}>RECORDING SESSION</MenuItem>
          <MenuItem value={20}>PREMIUM RECORDING SESSION</MenuItem>
          <MenuItem value={30}>MIXING</MenuItem>
          <MenuItem value={30}>MASTER</MenuItem>
          <MenuItem value={30}>LIVE SOUND</MenuItem>
        </Select>
        </div>
        <div>
          <TextField
            type="text"
            id="fullname"
            label="Full Name"
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
            defaultValue="Hello World"
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
        <Button variant="contained" endIcon={<LoginIcon />}>
            BOOK NOW
        </Button>
     
      </Box>
      </FormControl>
      <Services/>

      </div>

    );
  }