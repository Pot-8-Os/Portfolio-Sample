import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import icon from "../../assets/icon.jpg";
import qiitaIcon from "../../assets/qiita-favicon.png";
import { FaTwitter, FaGithub, FaLink } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  profile: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sns: {
    display: "flex",
  },
  snsIcon: {
    padding: 16,
  },
  profileImage: {
    width: 200,
  },
  // pageTitle: {
  //   alignItems: "left",
  // },
});

export default function Profile() {
  const classes = useStyles();
  const iconSize = 32;
  return (
    <Box className={classes.profile}>
      {/* <Box className={classes.pageTitle}>
        <Typography variant="h3">Profole</Typography>
      </Box> */}
      <Box>
        <img src={icon} alt="" className={classes.profileImage} />
      </Box>
      <Box>
        <Typography variant="h4">ハマダショウ</Typography>
      </Box>
      <Box>
        <Typography variant="h5">大学院生</Typography>
      </Box>
      <Box className={classes.sns}>
        <Box className={classes.snsIcon}>
          <a
            href="https://twitter.com/peintre_inconnu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={iconSize} style={{ color: "#55acee" }} />
          </a>
        </Box>
        <Box className={classes.snsIcon}>
          <a
            href="https://github.com/Pot-8-Os/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={iconSize} style={{ color: "#4183c4" }} />
          </a>
        </Box>
        <Box className={classes.snsIcon}>
          <a
            href="https://qiita.com/Pot-8-Os"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={qiitaIcon} width={32} height={32} alt="" />
          </a>
        </Box>
        <Box className={classes.snsIcon}>
          <a
            href="http://proletari.art/wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink size={iconSize} />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
