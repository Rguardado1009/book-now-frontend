import React from 'react'
import { Container, Grid } from "@material-ui/core";
import AllReviewsCard from  './AllReviewsCard'
import {useState, useEffect} from "react";

export default function AllReviews({currentUser}) {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:3000/reviews')
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
    }, [])

console.log(reviews)
    return (
        <Container className="services">
          <Grid container spacing="3">
  {reviews && reviews.map(review =>(
      <Grid item lg= {6} md={4} key={review.id}>
        <AllReviewsCard review={review}/>
       
        </Grid>
      ))}
      
    </Grid>
        </Container>
    )}
