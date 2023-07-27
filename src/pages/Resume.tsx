import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { FaGithubAlt, FaAngleDown } from "react-icons/fa";
import { makeStyles } from "@material-ui/styles";
import contents from "./ResumeComponent/contents.json";
import dayjs from "dayjs";
import Helmet from "react-helmet";

type Resume = {
  src: string;
  company: String;
  industry: String;
  startAt: String;
  endAt?: String;
  skills: Array<String>;
  comments: Array<String>;
};

const useStyles = makeStyles({
  resume: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },
  card: {
    width: "100%",
    maxWidth: 1200,
    margin: 20,
    border: "solid 2px grey",
  },
  skillCard: { margin: 8 },
  cardMedia: {
    height: 150,
  },
  typography: {
    borderBottom: "solid 10px grey",
  },
});

export default function Resume() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume - Portfolio</title>
      </Helmet>
      <Box className={classes.resume}>
        <Typography variant="h2">Resume</Typography>
        {contents.map((item: Resume) => {
          return (
            <Card className={classes.card}>
              <CardMedia
                image={item.src}
                title="Image title"
                className={classes.cardMedia}
              ></CardMedia>
              <CardContent>
                <Typography variant="h4">{item.company}</Typography>
                <ul>
                  <li>
                    <Typography variant="body1">{item.industry}</Typography>
                  </li>
                  <li>
                    <Typography variant="body1">{`${dayjs(
                      item.startAt as string
                    ).format("YYYY/MM")} 〜 ${
                      item.endAt
                        ? dayjs(item.endAt as string).format("YYYY/MM")
                        : "現職"
                    }`}</Typography>
                  </li>
                </ul>
                <Typography variant="h5">技術トピック</Typography>
                <Box style={{ display: "flex" }}>
                  {item.skills.map((skill: String) => {
                    return (
                      <Card className={classes.skillCard}>
                        <CardContent>
                          <Typography variant="body1">{skill}</Typography>
                        </CardContent>
                      </Card>
                    );
                  })}
                </Box>
                <Accordion>
                  <AccordionSummary expandIcon={<FaAngleDown />}>
                    <Typography variant="h5" gutterBottom>
                      コメント
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      {item.comments.map((comment) => {
                        return (
                          <li>
                            <Typography variant="body1">{comment}</Typography>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
}
