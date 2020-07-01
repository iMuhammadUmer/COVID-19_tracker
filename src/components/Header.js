import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
} from "@material-ui/core";
import logo from "../coronavirus.svg";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    height: "auto",
  },
  Toolbar: {
    width: "95%",
    borderRadius: 50,
    border: 2,
    borderColor: "white",
  },
  Grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  update: {
    fontSize: 12,
    fontStyle: "italic",
  },
}));
export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3} className={classes.Grid}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                backgroundColor="black"
              >
                <a href="http://covid19_tracker.surge.sh/">
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.Grid}>
              <h3>COVID 19 Tracker</h3>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.Grid}>
              <p className={classes.update}>updated: </p>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
