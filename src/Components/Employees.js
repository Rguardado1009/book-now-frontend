import {React, useState, useEffect} from 'react'
import { Container, Grid } from "@material-ui/core";
import EmployeesCard from './EmployeesCard'
// import {useParams} from "react-router-dom"

const Employees = () => {
const [employees, setEmployees] = useState([]);

useEffect(()=>{
  fetch('http://localhost:3000/employees')
  .then((r) => r.json())
  .then((employees) => setEmployees(employees));
}, [])

    return (
      <Container className="employees">
        <Grid  container spacing="3">
{employees.map(employee =>(
    <Grid item lg= {6} md={4} key={employee.id}>
      <EmployeesCard  employee={employee}/>
      </Grid>
    ))}
  </Grid>
        </Container>
    )}
export default Employees
