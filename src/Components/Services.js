import { React, useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((r) => r.json())
      .then((services) => setServices(services));
  }, []);

  return (
    <Container className="services">
      <Grid alignItems="center" justifyContent="center" container>
        {services.map((service) => (
          <Grid item lg="6" md="4" sm="4" xs="auto" key={service.id}>
            <ServicesCard
              alignItems="center"
              justifyContent="center"
              service={service}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Services;
