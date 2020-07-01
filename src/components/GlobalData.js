import React, { useState, useEffect } from "react";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import NumberFormat from "react-number-format";

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
  const [globalData, setGlobalData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    async function fetchGlobalData() {
      setDataLoading(true);
      const apiResponse = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );
      const dataFromAPI = await apiResponse.json();
      setGlobalData(dataFromAPI);
      setDataLoading(false);
    }
    fetchGlobalData();
  }, []);
  const loading = "Loading...";
  if (dataLoading) {
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
            <h1>{loading}</h1>
          </div>
          <Doughnut data={data} width={400} height={200} />
        </CardContent>
      </Card>
    );
  }

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
          <h1>
            <NumberFormat
              value={
                globalData &&
                globalData.results &&
                globalData.results[0].total_cases
              }
              displayType={"text"}
              thousandSeparator={true}
              renderText={(value) => <div>{value}</div>}
            />
          </h1>
        </div>
        <Doughnut data={data} width={400} height={200} />
      </CardContent>
    </Card>
  );
};
