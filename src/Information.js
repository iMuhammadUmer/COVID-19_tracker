import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "blue",
    border: 1,
    m: 1,
    borderColor: "white",
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  grid: {
    width: "95%",
    marginTop: "1em",
  },
});
export const Information = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={3}>
        <h1>sm 3</h1>
      </Grid>
      <Grid item xs={12} sm={9}>
        <h1>sm 9</h1>
      </Grid>
      <Grid item xs={12} sm={3}>
        <h1>sm 3</h1>
      </Grid>
      <Grid item xs={12} sm={9}>
        <h1>sm 9</h1>
      </Grid>
    </Grid>
  );
};
