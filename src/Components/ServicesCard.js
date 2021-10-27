import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root: {
      maxWidth: 645,
      background: '#009994',
      margin: '20px',
    },
    media: {
      height: 440,
    },
    title: {
      fontFamily: 'roboto',
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#fff',
    },
    desc: {
      fontFamily: 'roboto',
      fontSize: '1.1rem',
      color: '#ddd',
    },
  });
export default function ServicesCard({service}) {
    const classes = useStyles();
    return (
        <div>
     
        {console.log(service.Image)}
         
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={service.Image}
          title="Services Image"
        />
        <CardContent>
          <Typography
            variant="h1"
            component="h1"
            className={classes.title}
          >
            {service.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {service.description}
          </Typography>
        </CardContent>
      </Card>
        </div>
    )
}
