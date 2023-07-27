import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Profile from "./HomeComponent/Profile";
import Biography from "./HomeComponent/Biography";
import { Helmet } from "react-helmet";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    // paddingTop: 50,
    paddingLeft: 100,
    paddingRight: 100,
  },
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
      </Helmet>
      <Box className={classes.home}>
        <Typography variant="h2">Profile</Typography>
      </Box>
      <Box className={classes.root}>
        <Profile />
        <Biography />
      </Box>
    </>
  );
}
