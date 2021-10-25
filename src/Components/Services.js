import {React, useState, useEffect} from 'react'
import { Container, Grid } from "@material-ui/core";
import ServicesCard from './ServicesCard';
// import {useParams} from "react-router-dom"

const Services = () => {
const [services, setServices] = useState([]);

useEffect(()=>{
  fetch('http://localhost:3000/services')
  .then((r) => r.json())
  .then((services) => setServices(services));
}, [])

    return (
      <Container className="services">
        <Grid  container spacing="3">
{services.map(service =>(
    <Grid item lg= {6} md={4} key={service.id}>
      <ServicesCard  service={service}/>
      </Grid>
    ))}
  </Grid>
        </Container>
    )}
export default Services
