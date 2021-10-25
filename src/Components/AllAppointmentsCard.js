import React from 'react'
import { Link, useHistory} from "react-router-dom";
import {useState, useEffect} from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Reviews from './Reviews'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import RateReviewIcon from '@mui/icons-material/RateReview';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
export default function AllAppointmentsCard({appointment, currentUser, reviews}) {

    const history = useHistory()
    const [show, setShow] = useState(false);
    let dateString =  appointment.start_time
    const formatDate = (dateString) => {
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true}
        return new Date(dateString).toLocaleDateString(undefined, options);
        }

    const start = new Date(appointment.start_time)
    const end = new Date(appointment.end_time)
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    let startTime = start.toLocaleString('en-US', options);
    let endTime = end.toLocaleString('en-US', options);

    const handleDelete = ()=>{
        fetch(`http://localhost:3000/appointments/${appointment.id}`, {
            method: 'DELETE'
    }).then(()=>{
        window.location.reload(true);})}






     return (
        <div>{show === false  ? ( 

             <Card sx={{ maxWidth: 540, maxHeight: 960}} elevation={6}>
                <CardHeader   className="all-card"
                  
                
                title={appointment.service.name}
                
                subheader={`${appointment.date}`}
                /> 
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                <Stack direction="column" 
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}>
                      <List
                      sx={{ width: '100%', maxWidth: 345, bgcolor: 'background.paper' }}
                      aria-label="contacts">
                    <ListItem disablePadding>
                         <ListItemText  primary={`Start Time: ${startTime}`} />
                    </ListItem>
                    <ListItem disablePadding>
                         <ListItemText  primary={`End Time: ${endTime}`} />
                    </ListItem>
                    <ListItem disablePadding>
                         <ListItemText  primary={`Engineer: ${appointment.employee.name}`} />
                    </ListItem>
                    <ListItem disablePadding>
                         <ListItemText  primary={`Rate: $ ${appointment.service.hourly_rate}`} />
                    </ListItem>
                    </List>
                <Button style={{backgroundColor: '#009994', color: '#ffff'}} onClick={()=> setShow(true)} variant="outlined" startIcon={<RateReviewIcon />}>
                   Review
                 </Button>
                 {/* </Link> */}
                 <Link style={{ textDecoration: 'none' }} to={`/appointment/${appointment.id}`}> 
                 <Button style={{backgroundColor: '#009994', color: '#ffff'}} variant="outlined" startIcon={<EditIcon />}>
                   Edit Appointment
                 </Button>
                 </Link>
                 <Button style={{backgroundColor: '#009994', color: '#ffff'}} onClick={handleDelete}variant="outlined" startIcon={<DeleteIcon />}>
                   Cancel Appointment 
                 </Button>
                </Stack>                    
                    </Typography>
                </CardContent>
               <br />
              </Card>
                ) : ( 
                     
            <div>
            {show === true && <Reviews show={show} setShow={setShow} appointment={appointment} currentUser={currentUser}/>}
            </div>)}
        </div>
    )
}