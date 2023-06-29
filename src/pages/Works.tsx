import React from "react"
import {
  Box,
  Typography,
  makeStyles,
  Card,
  CardContent,
  CardActionArea
} from "@material-ui/core"
import contents from "./WorksComponent/contents.json"
import Helmet from "react-helmet"

type Contents = {
  title: string
  tools: Array<String>
  description: string
  href: string
}

const cardWidth = 360
const cardMargin = 20
const useStyles = makeStyles({
  works: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20
  },
  cardBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    maxWidth: (cardWidth + cardMargin * 2) * 3 // 一行にCard3つまで
  },
  card: {
    margin: cardMargin,
    height: 300,
    width: cardWidth
  },
  cardActionArea: {
    height: 300,
    width: cardWidth
  }
})

export default function Works() {
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Work - My portfolio!</title>
      </Helmet>
      <Box className={classes.works}>
        <Typography variant="h2">Works</Typography>
        <Box className={classes.cardBox}>
          {contents.map((item: Contents) => {
            return (
              <Card className={classes.card}>
                <CardActionArea
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.cardActionArea}
                >
                  <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" align="center" gutterBottom>
                      {item.tools.join(" + ")}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })}
        </Box>
      </Box>
    </>
  )
}
