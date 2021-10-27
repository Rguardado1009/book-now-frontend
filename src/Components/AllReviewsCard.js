import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function AllReviewsCard({review}) {
    const reviewDate = new Date(review.created_at)
    let created_at = (reviewDate.getMonth()+1)+'/'+reviewDate.getDate()+'/'+reviewDate.getFullYear();
    return (
        <div>
            <Card style={{color: '#292929', textAlign:'center'}} sx={{ maxWidth: 540, maxHeight: 960}} elevation={6}>
                <CardHeader   className="all-card"
                  
                
                title={review.title}
                
                subheader={`${review.user.name}`}
                /> 
                <CardContent>
                <Typography component="legend">created on: {created_at} </Typography>
                <Typography component="legend">Overall Rating</Typography>
                     <Rating name="read-only" value={review.rating} readOnly />
                    <Typography variant="body2" color="textSecondary">
                            {review.content}
                    </Typography>
                </CardContent>
               <br />
              </Card>
        </div>
    )
}
