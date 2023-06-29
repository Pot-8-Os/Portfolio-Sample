import React from "react"
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Home from "./pages/Home"
import Works from "./pages/Works"
import Resume from "./pages/Resume"

enum PageCategory {
  Home,
  Works,
  Resume
}

const useStyles = makeStyles({
  flex: {
    flex: 1
  },
  title: {
    cursor: "pointer"
  }
})

function SelectedPage(page: PageCategory) {
  switch (page) {
    case PageCategory.Home:
      return <Home />
    case PageCategory.Works:
      return <Works />
    case PageCategory.Resume:
      return <Resume />
    default:
      return <Home />
  }
}

export default function MyPortfolio() {
  const classes = useStyles()
  const [value, setValue] = React.useState(PageCategory.Home)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={`${classes.flex} ${classes.title}`}
            onClick={() => setValue(PageCategory.Home)}
          >
            My Portfolio!
          </Typography>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Home" value={PageCategory.Home} />
            <Tab label="Works" value={PageCategory.Works} />
            <Tab label="Resume" value={PageCategory.Resume} />
          </Tabs>
        </Toolbar>
      </AppBar>
      {SelectedPage(value)}
    </>
  )
}
