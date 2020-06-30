import React from "react";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";
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

export const GlobalData = () => {
  const classes = useStyles();
  return (
    <Card className={classes.leftCard} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Coronavirus Cases
        </Typography>
        <div className={classes.totalCases}>
          <Typography className={classes.pos} color="textSecondary">
            World wide cases
            <br />
          </Typography>
          <h1>123,456</h1>
        </div>
        <Doughnut data={data} width={700} height={300} />
      </CardContent>
    </Card>
  );
};
