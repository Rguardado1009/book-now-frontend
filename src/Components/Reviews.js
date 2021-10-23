import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useParams, useHistory} from "react-router-dom"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export default function Reviews({currentUser, appointment,show, setShow}) {
    const history = useHistory()
    const { id } = useParams();
const number = {id}.id;
console.log(currentUser);
    const [review, setReview] = useState(0);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState("");
    // const [employee, setEmployee] = useState('');
    console.log(currentUser.reviews.length);
    const handleSubmit = (event) => {
       event.preventDefault()
       fetch('http://localhost:3000/reviews', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             user_id: currentUser.id,
             title: title,
             content: content,
             rating: review,
             employee_id: appointment.employee.id
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
//     useEffect(()=>{
//   fetch('http://localhost:3000/employees')
//   .then((r) =>  {
//     if (r.ok) {
//       r.json().then((employee) => {
//         setEmployee(employee)
//       })
//     } else {

//     }
//   })
// }, [])


    return (
       
      <Card sx={{ maxWidth: 540, maxHeight: 960}} elevation={6}
        // sx={{
        //   '& > legend': { mt: 2 },
        // }} mt={2}
      >

     
            <CardHeader   className="all-card"
                title='Please Provide a Comment'/> 
                <Stack direction="column" 
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}>
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
            <Typography component="legend">Overall Service</Typography>
            <Rating
            name="simple-controlled"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            />
            <TextField id="outlined-basic" label="Title" variant="outlined" value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
            id="outlined-multiline-static"
            label="Review"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
        </Stack> 
        <br/>
        <Stack direction="row" 
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={6}> 
        <Button style={{backgroundColor: '#009994', color: '#ffff'}} onClick={()=> setShow(!show)} variant="outlined" startIcon={<NavigateBeforeIcon />}>
          Back
        </Button>   
            <Button style={{backgroundColor: '#009994', color: '#ffff'}} onClick={handleSubmit} variant="contained">Submit</Button>
           </Stack>
           <br/>
      </Card>
       
    )
}
