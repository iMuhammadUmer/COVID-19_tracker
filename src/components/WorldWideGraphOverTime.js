import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
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
    padding: 2,
    border: 1,
    m: 1,
    borderColor: "black",
  },
});

export const WorldWideGraphOverTime = () => {
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
            World wide graph over time
          </Typography>
          <h3>Line graph</h3>
        </div>
      </CardContent>
    </Card>
  );
};
