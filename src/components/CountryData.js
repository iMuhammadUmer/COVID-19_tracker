import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Active Cases", "Recovered", "Deaths"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FFCE56", "#31D994", "#FF6384"],
      hoverBackgroundColor: ["#FFCE56", "#31D994", "#FF6384"],
    },
  ],
};

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
    fontSize: 12,
    fontWeight: "bold",
  },
  pos: {
    color: "black",
    letterSpacing: 3,
  },
  grid: {
    width: "95%",
    marginTop: "1em",
  },
  leftCard: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    backgroundColor: "#efefef",
    textAlign: "left",
    marginTop: "1em",
  },
  totalCases: {
    marginTop: "0.5em",
  },
  worldGraph: {
    width: 50,
    height: 50,
  },
  countryStats: {
    marginTop: "1em",
  },
  detailedStats: {
    width: 200,
    height: 100,
    borderRadius: 10,
    padding: 5,
    border: 1,
    m: 1,
    borderColor: "black",
  },
});

export const CountryData = () => {
  const classes = useStyles();
  return (
    <Card
      className={classes.leftCard}
      variant="outlined"
      style={{ height: 300 }}
    >
      <CardContent>
        <div className={classes.totalCases}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Coronavirus Cases
          </Typography>
          <h3>Pakistan, Karachi</h3>
        </div>
        <Grid container xs={12} sm={12} className={classes.countryStats}>
          <Grid item xs={4} sm={4}>
            <h6>Confirmed</h6>
            <h4 style={{ color: "#FFCE56" }}>500</h4>
          </Grid>
          <Grid item xs={4} sm={4}>
            <h6>Recovered</h6>
            <h4 style={{ color: "#31D994" }}>500</h4>
          </Grid>
          <Grid item xs={4} sm={4}>
            <h6>Deaths</h6>
            <h4 style={{ color: "#FF6384" }}>500</h4>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} className={classes.countryStats}>
          <Grid item xs={4} sm={4}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              style={{ marginBottom: -5 }}
            >
              Affected People
            </Typography>
            <h4 style={{ color: "#FFCE56" }}>500</h4>
          </Grid>
          <Grid item xs={8} sm={8}>
            <Grid container>
              <div className={classes.detailedStats}>
                <Grid item xs={10} sm={10}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    style={{ marginBottom: -5 }}
                  >
                    Mild
                  </Typography>
                  <h4 style={{ color: "#9CABFE" }}>500</h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    style={{ marginBottom: -5, marginTop: 1 }}
                  >
                    Serious
                  </Typography>
                  <h4 style={{ color: "#FFCE56" }}>500</h4>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
