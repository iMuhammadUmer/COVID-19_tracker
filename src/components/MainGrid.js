import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { GlobalData } from "./GlobalData";
import { CountryData } from "./CountryData";
import { CountryStats } from "./CountryStats";
import { WorldWideGraphOverTime } from "./WorldWideGraphOverTime";
import { MostEffectedContries } from "./MostEffectedContries";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <GlobalData />
            <CountryData />
            <WorldWideGraphOverTime />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <CountryStats />

            <MostEffectedContries />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
