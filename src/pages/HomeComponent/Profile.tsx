import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import icon from "../../assets/icon.jpg"
import qiitaIcon from "../../assets/qiita-favicon.png"
import { FaTwitter, FaGithub, FaLink } from "react-icons/fa"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  profile: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  sns: {
    display: "flex"
  },
  snsIcon: {
    padding: 16
  }
})

export default function Profile() {
  const classes = useStyles()
  const iconSize = 32
  return (
    <Box className={classes.profile}>
      <Box>
        <img src={icon} alt="" />
      </Box>
      <Box>
        <Typography variant="h4">はまだしょう</Typography>
      </Box>
      <Box>
        <Typography variant="h5">大学院生</Typography>
      </Box>
      <Box className={classes.sns}>
        <Box className={classes.snsIcon}>
          <a
            href="https://twitter.com/mistolteen_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={iconSize} style={{ color: "#55acee" }} />
          </a>
        </Box>
        <Box className={classes.snsIcon}>
          <a
            href="https://github.com/iteduki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={iconSize} style={{ color: "#4183c4" }} />
          </a>
        </Box>
        <Box className={classes.snsIcon}>
          <a
            href="https://qiita.com/mistolteen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={qiitaIcon} width={32} height={32} alt="" />
          </a>
        </Box>
        <Box className={classes.snsIcon}>
          <a
            href="https://iteduki.hateblo.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink size={iconSize} />
          </a>
        </Box>
      </Box>
    </Box>
  )
}
