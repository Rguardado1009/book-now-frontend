import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Collapse } from '@material-ui/core';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';
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
             {/* <Card evelation={6}>
                <CardHeader 
                
                title={service.name}
                
                subheader={`Minimum Hours Required ${service.duration}`}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {service.description}
                    </Typography>
                </CardContent>

              </Card> */}
        {console.log(service.Image)}
              {/* <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}> */}
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={service.Image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            // gutterBottom
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
    {/* </Collapse> */}
        </div>
    )
}
