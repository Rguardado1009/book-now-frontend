import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "#009994",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "roboto",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function EmployeesCard({ employee }) {
  const classes = useStyles();
  return (
    <div>
      <Card
        style={{ color: "#292929", textAlign: "center" }}
        sx={{ maxWidth: 720, maxHeight: 1280 }}
        elevation={6}
      >
        <CardHeader
          className="all-card"
          title={employee.name}
          subheader="Engineer"
        />
        <CardMedia
          className={classes.media}
          image={employee.images}
          title="employees Image"
        />
        <CardContent>
          <Typography component="h2">
            Known for working with: {employee.Knownfor}{" "}
          </Typography>
          {/* <Typography component="legend">Overall Rating</Typography> */}
          {/* <Rating name="read-only" value={employee.r} readOnly /> */}
          <Typography variant="body2" color="textSecondary">
            {employee.description}
          </Typography>
        </CardContent>
        <br />
      </Card>
    </div>
  );
}
