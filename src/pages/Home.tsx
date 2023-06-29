import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import Profile from "./HomeComponent/Profile"
import Biography from "./HomeComponent/Biography"
import { Helmet } from "react-helmet"

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingTop: 50,
    paddingLeft: 100,
    paddingRight: 100
  }
})

export default function Home() {
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My portfolio!</title>
      </Helmet>
      <Box className={classes.root}>
        <Profile />
        <Biography />
      </Box>
    </>
  )
}
