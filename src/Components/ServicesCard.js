import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 720,
      maxHeight: 1280,
      background: '#009994',
      margin: '20px',
    },
    media: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 560,
      height: 640,
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
         
      <Card style={{color: '#292929', textAlign:'center'}} sx={{ maxWidth: 720, maxHeight: 1280}} elevation={6} className={classes.root}>
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
