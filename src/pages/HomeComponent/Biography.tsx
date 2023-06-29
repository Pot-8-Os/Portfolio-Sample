import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  biography: {
    flexGrow: 1,
    marginTop: 30
  }
})
export default function Biography() {
  const classes = useStyles()
  return (
    <Box className={classes.biography}>
      <Box>
        <Typography variant="h4">バイオグラフィ</Typography>
      </Box>
      <Box>
        <ul>
          <li>
            <Typography variant="body1">hamasho</Typography>
          </li>
          <li>
            <Typography variant="body1">1984/06/13</Typography>
          </li>
        </ul>
      </Box>
      <Box>
        <Typography variant="h4">学歴・資格</Typography>
      </Box>
      <Box>
        <Box>
          <ul>
            <li>
              <Typography variant="body1">
                岐阜大学工学部応用情報学科
              </Typography>
              <Typography variant="caption">2010年3月卒</Typography>
            </li>
            <li>
              <Typography variant="body1">基本情報技術者試験</Typography>
              <Typography variant="caption">2012年8月</Typography>
            </li>
            <li>
              <Typography variant="body1">
                情報セキュリティマネジメント試験
              </Typography>
              <Typography variant="caption">2016年5月</Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  )
}
