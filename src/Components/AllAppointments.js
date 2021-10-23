import React, {useState, useEffect} from "react";
import { Container, Grid } from "@material-ui/core";
import AllAppointmentsCard from './AllAppointmentsCard'
export default function AllAppointments({currentUser}) {


    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3000/users/${currentUser.id}`, {credentials: 'include'})
        .then((r) => r.json())
        .then((user) => setUser(user));
      }, [])

    return (
        <Container>
          <h1>Total Reviews: {currentUser.reviews.length}</h1>
          <Grid container spacing="3">
  {user.appointments && user.appointments?.map(appointment =>(
      <Grid item lg= {6} md={4} key={appointment.id}>
        <AllAppointmentsCard currentUser={user} appointment={appointment}/>
       
        </Grid>
      ))}
      
    </Grid>
          </Container>
      )}

