import React from 'react'
import { Link, useHistory} from "react-router-dom";

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import RateReviewIcon from '@mui/icons-material/RateReview';
import EditIcon from '@mui/icons-material/Edit';
export default function AllAppointmentsCard({appointment}) {

    const history = useHistory()
    const start = new Date(appointment.start_time)
    const end = new Date(appointment.end_time)
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    let startTime = start.toLocaleString('en-US', options);
    let endTime = end.toLocaleString('en-US', options);
    const diff = start - end;
    const duration = new Date(diff).getHours();

    const handleDelete = ()=>{
        fetch(`http://localhost:3000/appointments/${appointment.id}`, {
            method: 'DELETE'
    }).then(()=>{
        window.location.reload(true);

    })}
     return (
        <div>

             <Card evelation={6}>
                <CardHeader 
                
                title={appointment.service.name}
                
                subheader={`${appointment.date}`}
                /> 
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                <Stack direction="column" spacing={2}>

                    <p>Start Time:{startTime}</p>
                    <p>End Time: {endTime}</p>
                    {/* <p>{duration} </p> */}
                    <p>Engineer: {appointment.employee.name}</p>
                    <p>USD $ {appointment.service.hourly_rate}</p>
                <Button variant="outlined" startIcon={<RateReviewIcon />}>
                   Review
                 </Button>
                 <Link style={{ textDecoration: 'none' }} to={`/appointment/${appointment.id}`}> 
                 <Button variant="outlined" startIcon={<EditIcon />}>
                   Edit Appointment
                 </Button>
                 </Link>
                 <Button onClick={handleDelete}variant="outlined" startIcon={<DeleteIcon />}>
                   Cancel Appointment 
                 </Button>
                </Stack>                    
                    </Typography>
                </CardContent>
               
              </Card>
        </div>
    )
}
