import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 18,
    height: 200,
  },
}));

export const CountryGraph = () => {
  const classes = useStyles();

  return <Paper className={classes.paper}>Country graph</Paper>;
};
